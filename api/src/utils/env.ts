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

function isAllowedEnv(
  env: string
): env is 'development' | 'production' | 'test' {
  return ['development', 'production', 'test'].includes(env);
}

assert.ok(process.env.NODE_ENV);
assert.ok(isAllowedEnv(process.env.NODE_ENV));
assert.ok(process.env.AUTH0_DOMAIN);
assert.ok(process.env.AUTH0_AUDIENCE);
assert.ok(process.env.API_LOCATION);
assert.ok(process.env.SESSION_SECRET);
assert.ok(process.env.FCC_ENABLE_SWAGGER_UI);

if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test') {
  assert.ok(process.env.PORT);
  assert.ok(process.env.MONGOHQ_URL);
  assert.notEqual(
    process.env.SESSION_SECRET,
    'a_thirty_two_plus_character_session_secret',
    'The session secret should be changed from the default value.'
  );
}

export const MONGOHQ_URL =
  process.env.MONGOHQ_URL ??
  'mongodb://localhost:27017/freecodecamp?directConnection=true';
export const NODE_ENV = process.env.NODE_ENV;
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
export const PORT = process.env.PORT || '3000';
export const API_LOCATION = process.env.API_LOCATION;
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const FCC_ENABLE_SWAGGER_UI =
  process.env.FCC_ENABLE_SWAGGER_UI === 'true';
