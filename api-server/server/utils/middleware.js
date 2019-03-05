import dedent from 'dedent';
import { validationResult } from 'express-validator/check';

import { createValidatorErrorFormatter } from './create-handled-error.js';
import { homeLocation } from '../../../config/env';
import {
  getAccessTokenFromRequest,
  removeCookies
} from './getSetAccessToken.js';

export function ifNoUserRedirectTo(url, message, type = 'errors') {
  return function(req, res, next) {
    const { path } = req;
    if (req.user) {
      return next();
    }

    req.flash(type, message || `You must be signed in to access ${path}`);

    return res.redirect(url);
  };
}

export function ifNoUserSend(sendThis) {
  return function(req, res, next) {
    if (req.user) {
      return next();
    }
    return res.status(200).send(sendThis);
  };
}

export function ifNoUser401(req, res, next) {
  if (req.user) {
    return next();
  }
  return res.status(401).end();
}

export function ifNotVerifiedRedirectToUpdateEmail(req, res, next) {
  const { user } = req;
  if (!user) {
    return next();
  }
  if (!user.emailVerified) {
    req.flash(
      'danger',
      dedent`
        We do not have your verified email address on record,
        please add it in the settings to continue with your request.
      `
    );
    return res.redirect('/settings');
  }
  return next();
}

export function ifUserRedirectTo(path = `${homeLocation}/welcome`, status) {
  status = status === 302 ? 302 : 301;
  return (req, res, next) => {
    const { accessToken } = getAccessTokenFromRequest(req);
    if (req.user && accessToken) {
      return res.status(status).redirect(path);
    }
    if (req.user && !accessToken) {
      // This request has an active auth session
      // but there is no accessToken attached to the request
      // perhaps the user cleared cookies?
      // we need to remove the zombie auth session
      removeCookies(req, res);
      delete req.session.passport;
    }
    return next();
  };
}

// for use with express-validator error formatter
export const createValidatorErrorHandler = (...args) => (req, res, next) => {
  const validation = validationResult(req).formatWith(
    createValidatorErrorFormatter(...args)
  );

  if (!validation.isEmpty()) {
    const errors = validation.array();
    return next(errors.pop());
  }

  return next();
};
