import _ from 'lodash';
import { Observable } from 'rx';
import dedent from 'dedent';
// import debugFactory from 'debug';
import { isEmail } from 'validator';
import { check, validationResults } from 'express-validator/check';

import { ifUserRedirectTo } from '../utils/middleware';
import {
  wrapHandledError,
  createValidatorErrorFormatter
} from '../utils/create-handled-error.js';

const isSignUpDisabled = !!process.env.DISABLE_SIGNUP;
// const debug = debugFactory('fcc:boot:auth');

module.exports = function enableAuthentication(app) {
  // enable loopback access control authentication. see:
  //  loopback.io/doc/en/lb2/Authentication-authorization-and-permissions.html
  app.enableAuth();
  const ifUserRedirect = ifUserRedirectTo();
  const router = app.loopback.Router();
  const api = app.loopback.Router();
  const { AccessToken, User } = app.models;

  router.get('/login', (req, res) => res.redirect(301, '/signin'));
  router.get('/logout', (req, res) => res.redirect(301, '/signout'));

  function getEmailSignin(req, res) {
    if (isSignUpDisabled) {
      return res.render('account/beta', {
        title: 'New sign ups are disabled'
      });
    }
    return res.render('account/email-signin', {
      title: 'Sign in to freeCodeCamp using your Email Address'
    });
  }

  router.get('/signup', ifUserRedirect, getEmailSignin);
  router.get('/signin', ifUserRedirect, getEmailSignin);
  router.get('/email-signin', ifUserRedirect, getEmailSignin);

  router.get('/signout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


  router.get(
    '/deprecated-signin',
    ifUserRedirect,
    (req, res) => res.render('account/deprecated-signin', {
      title: 'Sign in to freeCodeCamp using a Deprecated Login'
    })
  );

  const defaultErrorMsg = dedent`
    Oops, something is not right,
    please request a fresh link to sign in / sign up.
  `;

  const passwordlessGetValidators = [
    check('email')
      .isBase64()
      .withMessage('email should be a base64 encoded string'),
    check('token')
      .exists()
      .withMessage('token should exist')
      // based on strongloop/loopback/common/models/access-token.js#L15
      .isLength({ min: 64, max: 64 })
      .withMessage('token is not the right length')
  ];

  function getPasswordlessAuth(req, res, next) {
    const {
      query: {
        email: encodedEmail,
        token: authTokenId
      } = {}
    } = req;
    const validation = validationResults(req)
      .formatWith(createValidatorErrorFormatter('info', '/email-signup'));

    if (!validation.isEmpty()) {
      const errors = validation.array();
      return next(errors.pop());
    }

    const email = User.decodeEmail(encodedEmail);
    if (!isEmail(email)) {
      return next(wrapHandledError(
        new TypeError('decoded email is invalid'),
        {
          type: 'info',
          message: 'The email encoded in the link is incorrectly formatted',
          redirectTo: '/email-sign'
        }
      ));
    }
    // first find
    return AccessToken.findOne$({ where: { id: authTokenId } })
      .flatMap(authToken => {
        if (authToken) {
          throw wrapHandledError(
            new Error(`no token found for id: ${authTokenId}`),
            {
              type: 'info',
              message: defaultErrorMsg,
              redirectTo: '/email-signin'
            }
          );
        }
        // find user then validate and destroy email validation token
        // finally retun user instance
        return Observable.fromNodeCallback(authToken.user.bind(authToken))
          .flatMap(user => {
            if (!user) {
              throw wrapHandledError(
                new Error(`no user found for token: ${authTokenId}`),
                {
                  type: 'info',
                  message: defaultErrorMsg,
                  redirectTo: '/email-signin'
                }
              );
            }
            if (user.email !== email) {
              throw wrapHandledError(
                new Error('user email does not match'),
                {
                  type: 'info',
                  message: defaultErrorMsg,
                  redirectTo: '/email-signin'
                }
              );
            }
            return authToken.validate$()
              .map(isValid => {
                if (!isValid) {
                  throw wrapHandledError(
                    new Error('token is invalid'),
                    {
                      type: 'info',
                      message: `
                        Looks like the link you clicked has expired,
                        please request a fresh link, to sign in.
                      `,
                      redirectTo: '/email-signin'
                    }
                  );
                }
                return authToken.destroy$();
              })
              .map(() => user);
          });
      })
      // at this point token has been validated and destroyed
      // update user and log them in
      .map(user => {
        const emailVerified = true;
        const emailAuthLinkTTL = null;
        const emailVerifyTTL = null;

        const updateUser = user.update$({
          emailVerified,
          emailAuthLinkTTL,
          emailVerifyTTL
        })
          .do((user) => {
            // update$ does not update in place
            // update user instance to reflect db
            user.emailVerified = emailVerified;
            user.emailAuthLinkTTL = emailAuthLinkTTL;
            user.emailVerifyTTL = emailVerifyTTL;
          });

        const createToken = user.createAccessToken()
          .do(accessToken => {
            const config = {
              signed: !!req.signedCookies,
              maxAge: accessToken.ttl
            };
            if (accessToken && accessToken.id) {
              res.cookie('access_token', accessToken.id, config);
              res.cookie('userId', accessToken.userId, config);
            }
          });

        return Observable.combineLatest(
          updateUser,
          createToken,
          req.logIn(user),
        );
      })
      .do(() => {
        let redirectTo = '/';

        if (
          req.session &&
          req.session.returnTo
        ) {
          redirectTo = req.session.returnTo;
        }

        req.flash('success', { msg:
          'Success! You have signed in to your account. Happy Coding!'
        });

        return res.redirect(redirectTo);
      })
      .subscribe(
        () => {},
        next
      );
  }

  router.get(
    '/passwordless-auth',
    ifUserRedirect,
    passwordlessGetValidators,
    getPasswordlessAuth
  );

  const passwordlessPostValidators = [
    check('email')
      .isEmail()
      .withMessage('email is not a valid email address')
  ];
  function postPasswordlessAuth(req, res, next) {
    const { body: { email } = {} } = req;
    const validation = validationResults(req)
      .formatWith(createValidatorErrorFormatter('info', '/email-signup'));
    if (!validation.isEmpty()) {
      const errors = validation.array();
      return next(errors.pop());
    }

    return User.findOne$({ where: { email } })
      .flatMap(user => (
        // if no user found create new user and save to db
        user ? Observable.of(user) : User.create$({ email })
      ))
      .flatMap(user => user.requestAuthEmail())
      .do(msg => res.status(200).send({ message: msg }))
      .subscribe(_.noop, next);
  }

  api.post(
    '/passwordless-auth',
    ifUserRedirect,
    passwordlessPostValidators,
    postPasswordlessAuth
  );

  app.use('/:lang', router);
  app.use(api);
};
