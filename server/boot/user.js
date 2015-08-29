import _ from 'lodash';
import async from 'async';
import moment from 'moment';
import debugFactory from 'debug';

import { ifNoUser401 } from '../utils/middleware';

const debug = debugFactory('freecc:boot:user');
const daysBetween = 1.5;

function calcCurrentStreak(cals) {
  const revCals = cals.concat([Date.now()]).slice().reverse();
  let streakBroken = false;
  const lastDayInStreak = revCals
    .reduce((current, cal, index) => {
      const before = revCals[index === 0 ? 0 : index - 1];
      if (
        !streakBroken &&
        moment(before).diff(cal, 'days', true) < daysBetween
      ) {
        return index;
      }
      streakBroken = true;
      return current;
    }, 0);

  const lastTimestamp = revCals[lastDayInStreak];
  return Math.ceil(moment().diff(lastTimestamp, 'days', true));
}

function calcLongestStreak(cals) {
  let tail = cals[0];
  const longest = cals.reduce((longest, head, index) => {
    const last = cals[index === 0 ? 0 : index - 1];
    // is streak broken
    if (moment(head).diff(last, 'days', true) > daysBetween) {
      tail = head;
    }
    if (dayDiff(longest) < dayDiff([head, tail])) {
      return [head, tail];
    }
    return longest;
  }, [cals[0], cals[0]]);

  return Math.ceil(dayDiff(longest));
}

function dayDiff([head, tail]) {
  return moment(head).diff(tail, 'days', true);
}

module.exports = function(app) {
  var router = app.loopback.Router();
  var User = app.models.User;
  var Story = app.models.Story;

  router.get('/login', function(req, res) {
    res.redirect(301, '/signin');
  });
  router.get('/logout', function(req, res) {
    res.redirect(301, '/signout');
  });
  router.get('/signin', getSignin);
  router.get('/signout', signout);
  router.get('/forgot', getForgot);
  router.post('/forgot', postForgot);
  router.get('/reset-password', getReset);
  router.post('/reset-password', postReset);
  router.get('/email-signup', getEmailSignup);
  router.get('/email-signin', getEmailSignin);
  router.get('/account/api', getAccountAngular);
  router.post(
    '/account/delete',
    ifNoUser401,
    postDeleteAccount
  );
  router.get('/account/unlink/:provider', getOauthUnlink);
  router.get('/account', getAccount);
  // Ensure this is the last route!
  router.get('/:username', returnUser);

  app.use(router);

  function getSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/signin', {
      title: 'Free Code Camp Login'
    });
  }

  function signout(req, res) {
    req.logout();
    res.redirect('/');
  }

  function getEmailSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/email-signin', {
      title: 'Sign in to your Free Code Camp Account'
    });
  }

  function getEmailSignup(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/email-signup', {
      title: 'Create Your Free Code Camp Account'
    });
  }

  function getAccount(req, res) {
    if (!req.user) {
      return res.redirect('/');
    }
    res.render('account/account', {
      title: 'Manage your Free Code Camp Account'
    });
  }

  function getAccountAngular(req, res) {
    res.json({
      user: req.user || {}
    });
  }

  function returnUser(req, res, next) {
    const username = req.params.username.toLowerCase();
    const { path } = req;
    User.findOne(
      { where: { username } },
      function(err, user) {
        if (err) {
          return next(err);
        }
        if (!user) {
          req.flash('errors', {
            msg: `404: We couldn't find path ${ path }`
          });
          return res.redirect('/');
        }
        if (!user.isGithubCool && !user.isMigrationGrandfathered) {
          req.flash('errors', {
            msg: `
              user ${ username } has not completed account signup
            `
          });
          return res.redirect('/');
        }

        var cals = user
          .progressTimestamps
          .map(objOrNum => {
            return typeof objOrNum === 'number' ?
              objOrNum :
              objOrNum.timestamp;
          })
          .sort();

        user.currentStreak = calcCurrentStreak(cals);
        user.longestStreak = calcLongestStreak(cals);

        const data = user
          .progressTimestamps
          .map((objOrNum) => {
            return typeof objOrNum === 'number' ?
              objOrNum :
              objOrNum.timestamp;
          })
          .filter((timestamp) => {
            return !!timestamp;
          })
          .reduce((data, timeStamp) => {
            data[(timeStamp / 1000)] = 1;
            return data;
          }, {});

        const challenges = user.completedChallenges.filter(function(obj) {
          return obj.challengeType === 3 || obj.challengeType === 4;
        });

        const bonfires = user.completedChallenges.filter(function(obj) {
          return obj.challengeType === 5 && (obj.name || '').match(/Bonfire/g);
        });

        res.render('account/show', {
          title: 'Camper ' + user.username + '\'s portfolio',
          username: user.username,
          name: user.name,
          isMigrationGrandfathered: user.isMigrationGrandfathered,
          isGithubCool: user.isGithubCool,
          location: user.location,
          github: user.githubURL,
          linkedin: user.linkedin,
          google: user.google,
          facebook: user.facebook,
          twitter: user.twitter,
          picture: user.picture,
          progressTimestamps: user.progressTimestamps,
          calender: data,
          challenges: challenges,
          bonfires: bonfires,
          moment: moment,
          longestStreak: user.longestStreak,
          currentStreak: user.currentStreak
        });
      }
    );
  }

  function postDeleteAccount(req, res, next) {
    User.destroyById(req.user.id, function(err) {
      if (err) { return next(err); }
      req.logout();
      req.flash('info', { msg: 'Your account has been deleted.' });
      res.redirect('/');
    });
  }

  function getOauthUnlink(req, res, next) {
    var provider = req.params.provider;
    User.findById(req.user.id, function(err, user) {
      if (err) { return next(err); }

      user[provider] = null;
      user.tokens =
        _.reject(user.tokens, function(token) {
          return token.kind === provider;
        });

      user.save(function(err) {
        if (err) { return next(err); }
        req.flash('info', { msg: provider + ' account has been unlinked.' });
        res.redirect('/account');
      });
    });
  }

  function getReset(req, res) {
    if (!req.accessToken) {
      req.flash('errors', { msg: 'access token invalid' });
      return res.render('account/forgot');
    }
    res.render('account/reset', {
      title: 'Password Reset',
      accessToken: req.accessToken.id
    });
  }

  function postReset(req, res, next) {
    const errors = req.validationErrors();
    const { password } = req.body;

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('back');
    }

    User.findById(req.accessToken.userId, function(err, user) {
      if (err) { return next(err); }
      user.updateAttribute('password', password, function(err) {
      if (err) { return next(err); }

        debug('password reset processed successfully');
        req.flash('info', { msg: 'password reset processed successfully' });
        res.redirect('/');
      });
    });
  }

  function getForgot(req, res) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    res.render('account/forgot', {
      title: 'Forgot Password'
    });
  }

  /**
  * POST /forgot
  * Create a random token, then the send user an email with a reset link.
  */

  function postForgot(req, res) {
    const errors = req.validationErrors();
    const email = req.body.email.toLowerCase();

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/forgot');
    }

    User.resetPassword({
      email: email
    }, function(err) {
      if (err) {
        req.flash('errors', err);
        return res.redirect('/forgot');
      }

      req.flash('info', {
        msg: 'An e-mail has been sent to ' +
        email +
        ' with further instructions.'
      });
      res.render('account/forgot');
    });
  }

  function updateUserStoryPictures(userId, picture, username, cb) {
    Story.find({ 'author.userId': userId }, function(err, stories) {
      if (err) { return cb(err); }

      const tasks = [];
      stories.forEach(function(story) {
        story.author.picture = picture;
        story.author.username = username;
        tasks.push(function(cb) {
          story.save(cb);
        });
      });
      async.parallel(tasks, function(err) {
        if (err) {
          return cb(err);
        }
        cb();
      });
    });
  }
};
