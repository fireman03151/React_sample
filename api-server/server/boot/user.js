import dedent from 'dedent';
import debugFactory from 'debug';
import { pick } from 'lodash';
import { Observable } from 'rx';

import { homeLocation } from '../../../config/env';
import {
  getProgress,
  normaliseUserFields,
  userPropsForSession
} from '../utils/publicUserProps';
import { fixCompletedChallengeItem } from '../../common/utils';
import { ifNoUser401, ifNoUserRedirectTo } from '../utils/middleware';

const log = debugFactory('fcc:boot:user');
const sendNonUserToHome = ifNoUserRedirectTo(homeLocation);

module.exports = function bootUser(app) {
  const api = app.loopback.Router();

  api.get('/account', sendNonUserToHome, getAccount);
  api.get('/account/unlink/:social', sendNonUserToHome, getUnlinkSocial);
  api.get('/user/get-session-user', readSessionUser);

  api.post('/account/delete', ifNoUser401, createPostDeleteAccount(app));
  api.post('/account/reset-progress', ifNoUser401, postResetProgress);
  api.post('/user/report-user/', ifNoUser401, createPostReportUserProfile(app));

  app.use('/internal', api);
};

function readSessionUser(req, res, next) {
  const queryUser = req.user;

  const source =
    queryUser &&
    Observable.forkJoin(
      queryUser.getCompletedChallenges$(),
      queryUser.getPoints$(),
      (completedChallenges, progressTimestamps) => ({
        completedChallenges,
        progress: getProgress(progressTimestamps, queryUser.timezone)
      })
    );
  Observable.if(
    () => !queryUser,
    Observable.of({ user: {}, result: '' }),
    Observable.defer(() => source)
      .map(({ completedChallenges, progress }) => ({
        ...queryUser.toJSON(),
        ...progress,
        completedChallenges: completedChallenges.map(fixCompletedChallengeItem)
      }))
      .map(user => ({
        user: {
          [user.username]: {
            ...pick(user, userPropsForSession),
            isEmailVerified: !!user.emailVerified,
            isGithub: !!user.githubProfile,
            isLinkedIn: !!user.linkedin,
            isTwitter: !!user.twitter,
            isWebsite: !!user.website,
            ...normaliseUserFields(user)
          }
        },
        result: user.username
      }))
  ).subscribe(user => res.json(user), next);
}

function getAccount(req, res) {
  const { username } = req.user;
  return res.redirect('/' + username);
}

function getUnlinkSocial(req, res, next) {
  const { user } = req;
  const { username } = user;

  let social = req.params.social;
  if (!social) {
    req.flash('danger', 'No social account found');
    return res.redirect('/' + username);
  }

  social = social.toLowerCase();
  const validSocialAccounts = ['twitter', 'linkedin'];
  if (validSocialAccounts.indexOf(social) === -1) {
    req.flash('danger', 'Invalid social account');
    return res.redirect('/' + username);
  }

  if (!user[social]) {
    req.flash('danger', `No ${social} account associated`);
    return res.redirect('/' + username);
  }

  const query = {
    where: {
      provider: social
    }
  };

  return user.identities(query, function(err, identities) {
    if (err) {
      return next(err);
    }

    // assumed user identity is unique by provider
    let identity = identities.shift();
    if (!identity) {
      req.flash('danger', 'No social account found');
      return res.redirect('/' + username);
    }

    return identity.destroy(function(err) {
      if (err) {
        return next(err);
      }

      const updateData = { [social]: null };

      return user.update$(updateData).subscribe(() => {
        log(`${social} has been unlinked successfully`);

        req.flash('info', `You've successfully unlinked your ${social}.`);
        return res.redirect('/' + username);
      }, next);
    });
  });
}

function postResetProgress(req, res, next) {
  const { user } = req;
  user.updateAttributes(
    {
      progressTimestamps: [
        {
          timestamp: Date.now()
        }
      ],
      currentChallengeId: '',
      isRespWebDesignCert: false,
      is2018DataVisCert: false,
      isFrontEndLibsCert: false,
      isJsAlgoDataStructCert: false,
      isApisMicroservicesCert: false,
      isInfosecQaCert: false,
      is2018FullStackCert: false,
      isFrontEndCert: false,
      isBackEndCert: false,
      isDataVisCert: false,
      isFullStackCert: false,
      completedChallenges: []
    },
    function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({
        messageType: 'success',
        message: 'You have successfully reset your progress'
      });
    }
  );
}

function createPostDeleteAccount(app) {
  const { User } = app.models;
  return function postDeleteAccount(req, res, next) {
    User.destroyById(req.user.id, function(err) {
      if (err) {
        return next(err);
      }
      req.logout();
      req.flash('success', 'You have successfully deleted your account.');
      const config = {
        signed: !!req.signedCookies,
        domain: process.env.COOKIE_DOMAIN || 'localhost'
      };
      res.clearCookie('jwt_access_token', config);
      res.clearCookie('access_token', config);
      res.clearCookie('userId', config);
      res.clearCookie('_csrf', config);
      return res.status(200).end();
    });
  };
}

function createPostReportUserProfile(app) {
  const { Email } = app.models;
  return function postReportUserProfile(req, res, next) {
    const { user } = req;
    const { username } = req.body;
    const report = req.sanitize('reportDescription').trimTags();

    log(username);
    log(report);

    if (!username || !report || report === '') {
      return res.json({
        type: 'danger',
        message:
          'Oops, something is not right please re-check your submission.'
      });
    }
    return Email.send$(
      {
        type: 'email',
        to: 'team@freecodecamp.org',
        cc: user.email,
        from: 'team@freecodecamp.org',
        subject: 'Abuse Report : Reporting ' + username + "'s profile.",
        text: dedent(`
        Hello Team,\n
        This is to report the profile of ${username}.\n
        Report Details:\n
        ${report}\n\n
        Reported by:
        Username: ${user.username}
        Name: ${user.name}
        Email: ${user.email}\n
        Thanks and regards,
        ${user.name}
      `)
      },
      err => {
        if (err) {
          err.redirectTo = `${homeLocation}/${username}`;
          return next(err);
        }

        return res.json({
          typer: 'info',
          message: `A report was sent to the team with ${user.email} in copy.`
        });
      }
    );
  };
}
