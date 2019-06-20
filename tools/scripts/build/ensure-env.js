const fs = require('fs');
const path = require('path');
const debug = require('debug');

const env = require('../../../config/env');

const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { createPathMigrationMap } = require('../seed/createPathMigrationMap');

const { createRedirects } = require('./createRedirects');

const log = debug('fcc:tools:ensure-env');

const { NODE_ENV } = process.env;

const {
  apiLocation: api,
  forumLocation: forum,
  locale,
  newsLocation: news
} = env;

const apiPath = path.resolve(__dirname, '../../../api-server');
const clientPath = path.resolve(__dirname, '../../../client');
const clientStaticPath = path.resolve(clientPath, 'static');
const globalConfigPath = path.resolve(__dirname, '../../../config');

if (NODE_ENV === 'production') {
  const redirects = createRedirects({ api, news, forum });
  fs.writeFile(`${clientStaticPath}/_redirects`, redirects, function(err) {
    if (err) {
      log('Error');
      console.error(err);
    }
    log('_redirects written');
  });
} else {
  log(`ignoring creation of redirect file in ${NODE_ENV}`);
}

const migrationMapPath = `${apiPath}/server/resources/pathMigration.json`;
fs.access(migrationMapPath, err => {
  if (err && NODE_ENV !== 'production') {
    log('creating pathMigration');
    return fs.writeFileSync(migrationMapPath, '{}');
  }
  if (NODE_ENV === 'production') {
    return getChallengesForLang(locale)
      .then(createPathMigrationMap)
      .then(map => {
        fs.writeFileSync(migrationMapPath, JSON.stringify(map));
        log('pathMigration has been written');
      })
      .catch(err => {
        console.error(err);
        // eslint-disable-next-line
        process.exit(1);
      });
  }
  log('pathMigration present');
  return null;
});

fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
fs.writeFileSync(`${globalConfigPath}/env.json`, JSON.stringify(env));
