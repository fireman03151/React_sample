import request from 'request';
import constantStrings from '../utils/constantStrings.json';
import labs from '../resources/labs.json';
import testimonials from '../resources/testimonials.json';
import secrets from '../../config/secrets';

module.exports = function(app) {
  const router = app.loopback.Router();
  const User = app.models.User;
  const BillBoard = app.models.BillBoard;
  router.get('/api/github', githubCalls);
  router.get('/api/blogger', bloggerCalls);
  router.get('/api/trello', trelloCalls);
  router.get('/chat', chat);
  router.get('/coding-bootcamp-cost-calculator', bootcampCalculator);
  router.get('/twitch', twitch);
  router.get('/pmi-acp-agile-project-managers', agileProjectManagers);
  router.get('/pmi-acp-agile-project-managers-form', agileProjectManagersForm);
  router.get('/nonprofits', nonprofits);
  router.get('/nonprofits-form', nonprofitsForm);
  router.get('/unsubscribe/:email', unsubscribeMonthly);
  router.get('/unsubscribe-notifications/:email', unsubscribeNotifications);
  router.get('/unsubscribe-quincy/:email', unsubscribeQuincy);
  router.get('/unsubscribed', unsubscribed);
  router.get('/get-started', getStarted);
  router.get('/submit-cat-photo', submitCatPhoto);
  router.get('/labs', showLabs);
  router.get('/stories', showTestimonials);
  router.get('/shop', showShop);
  router.get('/shop/cancel-stickers', cancelStickers);
  router.get('/shop/confirm-stickers', confirmStickers);
  router.get('/all-stories', showAllTestimonials);
  router.get('/terms', terms);
  router.get('/privacy', privacy);
  router.get('/how-nonprofit-projects-work', howNonprofitProjectsWork);
  router.get('/code-of-conduct', codeOfConduct);
  router.get('/academic-honesty', academicHonesty);
  router.get(
    '/the-fastest-web-page-on-the-internet',
    theFastestWebPageOnTheInternet
  );
  router.get('/billBoard', billBoard);

  app.use(router);

  function chat(req, res) {
    res.redirect('https://gitter.im/FreeCodeCamp/FreeCodeCamp');
  }

  function showLabs(req, res) {
    res.render('resources/labs', {
      title: 'Projects Built by Free Code Camp Software Engineers',
      projects: labs
    });
  }

  function terms(req, res) {
      res.render('resources/terms-of-service', {
            title: 'Terms of Service'
      });
  }

  function privacy(req, res) {
      res.render('resources/privacy', {
          title: 'Privacy policy'
      });
  }

  function howNonprofitProjectsWork(req, res) {
      res.render('resources/how-nonprofit-projects-work', {
          title: 'How our nonprofit projects work'
      });
  }

  function codeOfConduct(req, res) {
      res.render('resources/code-of-conduct', {
          title: 'Code of Conduct'
      });
  }

  function academicHonesty(req, res) {
      res.render('resources/academic-honesty', {
          title: 'Academic Honesty policy'
      });
  }

  function billBoard(req, res) {
    if(req.user && typeof req.user.currentChallenge.challengeId !== "undefined"){
      BillBoard.findOne({}, function(err, data){
        if(err){
          res.send({err: {type: "Error", message: "Database Error"}, data: null});
        } else {
          if (data.active) {
            res.send({err: null, data: data.message});
          } else {
            res.send({err: {type: "warning", message: "Bill Board is not active"}, data: null});
          }
        }
      });
    }
    else {
      res.send({err: {type: "warning", message: "User Not Signed In"}, data: null});
    }
  }

  function theFastestWebPageOnTheInternet(req, res) {
    res.render('resources/the-fastest-web-page-on-the-internet', {
      title: 'This is the fastest web page on the internet'
    });
  }

  function showTestimonials(req, res) {
    res.render('resources/stories', {
      title: 'Testimonials from Happy Free Code Camp Students ' +
        'who got Software Engineer Jobs',
      stories: testimonials.slice(0, 72),
      moreStories: true
    });
  }

  function showAllTestimonials(req, res) {
    res.render('resources/stories', {
      title: 'Testimonials from Happy Free Code Camp Students ' +
        'who got Software Engineer Jobs',
      stories: testimonials,
      moreStories: false
    });
  }

  function showShop(req, res) {
    res.render('resources/shop', {
      title: 'Support Free Code Camp by Buying t-shirts, ' +
        'stickers, and other goodies'
    });
  }

  function confirmStickers(req, res) {
    req.flash('success', {
      msg: 'Thank you for supporting our community! You should receive ' +
        'your stickers in the mail soon!'
    });
    res.redirect('/shop');
  }

  function cancelStickers(req, res) {
      req.flash('info', {
        msg: 'You\'ve cancelled your purchase of our stickers. You can ' +
          'support our community any time by buying some.'
      });
      res.redirect('/shop');
  }
  function submitCatPhoto(req, res) {
    res.send('Submitted!');
  }

  function bootcampCalculator(req, res) {
    res.render('resources/calculator', {
      title: 'Coding Bootcamp Cost Calculator'
    });
  }

  function nonprofits(req, res) {
    res.render('resources/nonprofits', {
      title: 'Your Nonprofit Can Get Pro Bono Code'
    });
  }

  function nonprofitsForm(req, res) {
    res.render('resources/nonprofits-form', {
      title: 'Nonprofit Projects Proposal Form'
    });
  }

  function agileProjectManagers(req, res) {
    res.render('resources/pmi-acp-agile-project-managers', {
      title: 'Get Agile Project Management Experience for the PMI-ACP'
    });
  }

  function agileProjectManagersForm(req, res) {
    res.render('resources/pmi-acp-agile-project-managers-form', {
      title: 'Agile Project Management Program Application Form'
    });
  }

  function twitch(req, res) {
    res.redirect('https://twitch.tv/freecodecamp');
  }

  function unsubscribeMonthly(req, res, next) {
    req.checkParams('email', 'Must send a valid email').isEmail();
    return User.findOne({ where: { email: req.params.email } }, (err, user) => {
      if (err) { return next(err); }
      if (!user) {
        req.flash('info', {
          msg: 'Email address not found. ' +
          'Please update your Email preferences from your profile.'
        });
        return res.redirect('/map');
      }
      return user.updateAttribute('sendMonthlyEmail', false, (err) => {
        if (err) { return next(err); }
        req.flash('info', {
          msg: 'We\'ve successfully updated your Email preferences.'
        });
        return res.redirect('/unsubscribed');
      });
    });
  }

  function unsubscribeNotifications(req, res, next) {
    req.checkParams('email', 'Must send a valid email').isEmail();
    return User.findOne({ where: { email: req.params.email } }, (err, user) => {
      if (err) { return next(err); }
      if (!user) {
        req.flash('info', {
          msg: 'Email address not found. ' +
          'Please update your Email preferences from your profile.'
        });
        return res.redirect('/map');
      }
      return user.updateAttribute('sendNotificationEmail', false, (err) => {
        if (err) { return next(err); }
        req.flash('info', {
          msg: 'We\'ve successfully updated your Email preferences.'
        });
        return res.redirect('/unsubscribed');
      });
    });
  }

  function unsubscribeQuincy(req, res, next) {
    req.checkParams('email', 'Must send a valid email').isEmail();
    return User.findOne({ where: { email: req.params.email } }, (err, user) => {
      if (err) { return next(err); }
      if (!user) {
        req.flash('info', {
          msg: 'Email address not found. ' +
          'Please update your Email preferences from your profile.'
        });
        return res.redirect('/map');
      }
      return user.updateAttribute('sendQuincyEmail', false, (err) => {
        if (err) { return next(err); }
        req.flash('info', {
          msg: 'We\'ve successfully updated your Email preferences.'
        });
        return res.redirect('/unsubscribed');
      });
    });
  }

  function unsubscribed(req, res) {
    res.render('resources/unsubscribed', {
      title: 'You have been unsubscribed'
    });
  }

  function getStarted(req, res) {
    res.render('resources/get-started', {
      title: 'How to get started with Free Code Camp'
    });
  }

  function githubCalls(req, res, next) {
    var githubHeaders = {
      headers: {
        'User-Agent': constantStrings.gitHubUserAgent
      },
      port: 80
    };
    request(
      [
        'https://api.github.com/repos/freecodecamp/',
        'freecodecamp/pulls?client_id=',
        secrets.github.clientID,
        '&client_secret=',
        secrets.github.clientSecret
      ].join(''),
      githubHeaders,
      function(err, status1, pulls) {
        if (err) { return next(err); }
        pulls = pulls ?
          Object.keys(JSON.parse(pulls)).length :
          'Can\'t connect to github';

        return request(
          [
            'https://api.github.com/repos/freecodecamp/',
            'freecodecamp/issues?client_id=',
            secrets.github.clientID,
            '&client_secret=',
            secrets.github.clientSecret
          ].join(''),
          githubHeaders,
          function(err, status2, issues) {
            if (err) { return next(err); }
            issues = ((pulls === parseInt(pulls, 10)) && issues) ?
            Object.keys(JSON.parse(issues)).length - pulls :
              "Can't connect to GitHub";
            return res.send({
              issues: issues,
              pulls: pulls
            });
          }
        );
      }
    );
  }

  function trelloCalls(req, res, next) {
    request(
      'https://trello.com/1/boards/BA3xVpz9/cards?key=' +
      secrets.trello.key,
      function(err, status, trello) {
        if (err) { return next(err); }
        trello = (status && status.statusCode === 200) ?
          (JSON.parse(trello)) :
          'Can\'t connect to to Trello';

        return res.end(JSON.stringify(trello));
      });
  }

  function bloggerCalls(req, res, next) {
    request(
      'https://www.googleapis.com/blogger/v3/blogs/2421288658305323950/' +
        'posts?key=' +
      secrets.blogger.key,
      function(err, status, blog) {
        if (err) { return next(err); }

        blog = (status && status.statusCode === 200) ?
          JSON.parse(blog) :
          'Can\'t connect to Blogger';
        return res.end(JSON.stringify(blog));
      }
    );
  }
};
