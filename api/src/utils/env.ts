import assert from 'node:assert';
import path from 'node:path';
import { config } from 'dotenv';

const envPath = path.resolve(__dirname, '../../../.env');
const { error } = config({ path: envPath });

if (error) {
  console.warn(`
  ----------------------------------------------------
  Warning: .env file not found.
  ----------------------------------------------------
  Please copy sample.env to .env

  You can ignore this warning if using a different way
  to setup this environment.
  ----------------------------------------------------
  `);
}

function isAllowedEnv(env: string): env is 'development' | 'production' {
  return ['development', 'production'].includes(env);
}

function isAllowedProvider(provider: string): provider is 'ses' | 'nodemailer' {
  return ['ses', 'nodemailer'].includes(provider);
}

assert.ok(process.env.HOME_LOCATION);
assert.ok(process.env.FREECODECAMP_NODE_ENV);
assert.ok(isAllowedEnv(process.env.FREECODECAMP_NODE_ENV));
assert.ok(process.env.EMAIL_PROVIDER);
assert.ok(isAllowedProvider(process.env.EMAIL_PROVIDER));
assert.ok(process.env.AUTH0_DOMAIN);
assert.ok(process.env.AUTH0_AUDIENCE);
assert.ok(process.env.API_LOCATION);
assert.ok(process.env.SESSION_SECRET);
assert.ok(process.env.FCC_ENABLE_SWAGGER_UI);
assert.ok(process.env.FCC_ENABLE_DEV_LOGIN_MODE);
assert.ok(process.env.JWT_SECRET);
assert.ok(process.env.STRIPE_SECRET_KEY);

if (process.env.FREECODECAMP_NODE_ENV !== 'development') {
  assert.ok(process.env.SES_ID);
  assert.ok(process.env.SES_SECRET);
  assert.notEqual(
    process.env.SES_SECRET,
    'ses_secret_from_aws',
    'The SES secret should be changed from the default value.'
  );
  assert.ok(process.env.SES_REGION);
  assert.ok(process.env.COOKIE_DOMAIN);
  assert.ok(process.env.PORT);
  assert.ok(process.env.MONGOHQ_URL);
  assert.ok(process.env.SENTRY_DSN);
  // The following values can exist in development, but production-like
  // environments need to override the defaults.
  assert.notEqual(
    process.env.SENTRY_DSN,
    'dsn_from_sentry_dashboard',
    `The DSN from Sentry's dashboard should be used.`
  );
  assert.notEqual(
    process.env.JWT_SECRET,
    'a_jwt_secret',
    'The JWT secret should be changed from the default value.'
  );
  assert.notEqual(
    process.env.SESSION_SECRET,
    'a_thirty_two_plus_character_session_secret',
    'The session secret should be changed from the default value.'
  );
  assert.ok(
    process.env.FCC_ENABLE_DEV_LOGIN_MODE !== 'true',
    'Dev login mode MUST be disabled in production.'
  );
  assert.ok(
    process.env.EMAIL_PROVIDER === 'ses',
    'SES MUST be used in production.'
  );
  assert.notEqual(
    process.env.STRIPE_SECRET_KEY,
    'sk_from_stripe_dashboard',
    'The Stripe secret should be changed from the default value.'
  );
}

export const HOME_LOCATION = process.env.HOME_LOCATION;
export const MONGOHQ_URL =
  process.env.MONGOHQ_URL ??
  'mongodb://localhost:27017/freecodecamp?directConnection=true';
export const FREECODECAMP_NODE_ENV = process.env.FREECODECAMP_NODE_ENV;
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
export const PORT = process.env.PORT || '3000';
export const API_LOCATION = process.env.API_LOCATION;
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const FCC_ENABLE_SWAGGER_UI =
  process.env.FCC_ENABLE_SWAGGER_UI === 'true';
export const FCC_ENABLE_DEV_LOGIN_MODE =
  process.env.FCC_ENABLE_DEV_LOGIN_MODE === 'true';
export const SENTRY_DSN =
  process.env.SENTRY_DSN === 'dsn_from_sentry_dashboard'
    ? ''
    : process.env.SENTRY_DSN;
export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || 'localhost';
export const JWT_SECRET = process.env.JWT_SECRET;
export const SES_ID = process.env.SES_ID;
export const SES_SECRET = process.env.SES_SECRET;
export const SES_REGION = process.env.SES_REGION;
export const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
