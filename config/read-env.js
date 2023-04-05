const path = require('path');
const { execSync } = require('child_process');

const envPath = path.resolve(__dirname, '../.env');
const { error } = require('dotenv').config({ path: envPath });

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

const {
  HOME_LOCATION: homeLocation,
  API_LOCATION: apiLocation,
  FORUM_LOCATION: forumLocation,
  NEWS_LOCATION: newsLocation,
  RADIO_LOCATION: radioLocation,
  CLIENT_LOCALE: clientLocale,
  CURRICULUM_LOCALE: curriculumLocale,
  SHOW_LOCALE_DROPDOWN_MENU: showLocaleDropdownMenu,
  ALGOLIA_APP_ID: algoliaAppId,
  ALGOLIA_API_KEY: algoliaAPIKey,
  STRIPE_PUBLIC_KEY: stripePublicKey,
  PAYPAL_CLIENT_ID: paypalClientId,
  PATREON_CLIENT_ID: patreonClientId,
  DEPLOYMENT_ENV: deploymentEnv,
  SENTRY_CLIENT_DSN: sentryClientDSN,
  SHOW_UPCOMING_CHANGES: showUpcomingChanges,
  SHOW_NEW_CURRICULUM: showNewCurriculum,
  GROWTHBOOK_URI: growthbookUri
} = process.env;

const locations = {
  homeLocation,
  apiLocation,
  forumLocation,
  newsLocation,
  radioLocation: !radioLocation
    ? 'https://coderadio.freecodecamp.org'
    : radioLocation
};

// This is used to identify the current deployment and is trimmed to remove
// the trailing newline.
const gitHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();

module.exports = Object.assign(locations, {
  clientLocale,
  curriculumLocale,
  showLocaleDropdownMenu: showLocaleDropdownMenu === 'true',
  deploymentEnv,
  environment: process.env.FREECODECAMP_NODE_ENV || 'development',
  algoliaAppId:
    !algoliaAppId || algoliaAppId === 'app_id_from_algolia_dashboard'
      ? ''
      : algoliaAppId,
  algoliaAPIKey:
    !algoliaAPIKey || algoliaAPIKey === 'api_key_from_algolia_dashboard'
      ? ''
      : algoliaAPIKey,
  stripePublicKey:
    !stripePublicKey || stripePublicKey === 'pk_from_stripe_dashboard'
      ? null
      : stripePublicKey,
  paypalClientId:
    !paypalClientId || paypalClientId === 'id_from_paypal_dashboard'
      ? null
      : paypalClientId,
  patreonClientId:
    !patreonClientId || patreonClientId === 'id_from_patreon_dashboard'
      ? null
      : patreonClientId,
  sentryClientDSN:
    !sentryClientDSN || sentryClientDSN === 'dsn_from_sentry_dashboard'
      ? null
      : sentryClientDSN,
  showUpcomingChanges: showUpcomingChanges === 'true',
  showNewCurriculum: showNewCurriculum === 'true',
  growthbookUri:
    !growthbookUri || growthbookUri === 'api_URI_from_Growthbook_dashboard'
      ? null
      : growthbookUri,
  gitHash
});
