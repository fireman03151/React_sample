const path = require('path');
const fs = require('fs');

// PIPELINE_ENV  is 'true' in the build pipeline
if (process.env.PIPELINE_ENV !== 'true') {
  const envPath = path.resolve(__dirname, '../.env');
  if (!fs.existsSync(envPath)) {
    throw Error('.env not found, please copy sample.env to .env.');
  }
  require('dotenv').config({ path: envPath });
}

const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  NEWS_LOCATION: news,
  CLIENT_LOCALE: clientLocale,
  CURRICULUM_LOCALE: curriculumLocale,
  SHOW_LOCALE_DROPDOWN_MENU: showLocaleDropdownMenu,
  STRIPE_PUBLIC_KEY: stripePublicKey,
  ALGOLIA_APP_ID: algoliaAppId,
  ALGOLIA_API_KEY: algoliaAPIKey,
  PAYPAL_CLIENT_ID: paypalClientId,
  DEPLOYMENT_ENV: deploymentEnv,
  SHOW_UPCOMING_CHANGES: showUpcomingChanges
} = process.env;

const locations = {
  homeLocation: home,
  apiLocation: api,
  forumLocation: forum,
  newsLocation: news
};

module.exports = Object.assign(locations, {
  clientLocale,
  curriculumLocale,
  showLocaleDropdownMenu: showLocaleDropdownMenu === 'true',
  deploymentEnv,
  environment: process.env.FREECODECAMP_NODE_ENV || 'development',
  stripePublicKey:
    !stripePublicKey || stripePublicKey === 'pk_from_stripe_dashboard'
      ? null
      : stripePublicKey,
  algoliaAppId:
    !algoliaAppId || algoliaAppId === 'app_id_from_algolia_dashboard'
      ? null
      : algoliaAppId,
  algoliaAPIKey:
    !algoliaAPIKey || algoliaAPIKey === 'api_key_from_algolia_dashboard'
      ? null
      : algoliaAPIKey,
  paypalClientId:
    !paypalClientId || paypalClientId === 'id_from_paypal_dashboard'
      ? null
      : paypalClientId,
  showUpcomingChanges: showUpcomingChanges === 'true'
});
