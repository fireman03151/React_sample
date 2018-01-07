require('dotenv').load();
require('./utils/webpack-code-split-polyfill');

if (process.env.OPBEAT_ID) {
  console.log('loading opbeat');
  require('opbeat').start({
    appId: process.env.OPBEAT_ID,
    organizationId: process.env.OPBEAT_ORG_ID,
    secretToken: process.env.OPBEAT_SECRET
  });
}

const _ = require('lodash');
const Rx = require('rx');
const loopback = require('loopback');
const boot = require('loopback-boot');
const expressState = require('express-state');
const path = require('path');
const setupPassport = require('./component-passport');

Rx.config.longStackSupport = process.env.NODE_DEBUG !== 'production';
const app = loopback();
const isBeta = !!process.env.BETA;

expressState.extend(app);
app.set('state namespace', '__fcc__');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(loopback.token());
app.disable('x-powered-by');

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV
});

setupPassport(app);

const { db } = app.datasources;
db.on('connected', _.once(() => console.log('db connected')));
app.start = _.once(function() {
  const server = app.listen(app.get('port'), function() {
    app.emit('started');
    console.log(
      'freeCodeCamp server listening on port %d in %s',
      app.get('port'),
      app.get('env')
    );
    if (isBeta) {
      console.log('freeCodeCamp is in beta mode');
    }
    console.log(`connecting to db at ${db.settings.url}`);
  });

  process.on('SIGINT', () => {
    console.log('Shutting down server');
    server.close(() => {
      console.log('Server is closed');
    });
    console.log('closing db connection');
    db.disconnect()
      .then(() => {
        console.log('DB connection closed');
        // exit process
        // this may close kept alive sockets
        // eslint-disable-next-line no-process-exit
        process.exit(0);
      });
  });
});

module.exports = app;

// start the server if `$ node server.js`
// in production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
