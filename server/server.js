require('dotenv').load();
var pmx = require('pmx');
pmx.init();

var _ = require('lodash'),
    loopback = require('loopback'),
    boot = require('loopback-boot'),
    expressState = require('express-state'),
    path = require('path'),
    setupPassport = require('./component-passport');

var app = loopback();
var isBeta = !!process.env.BETA;

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

app.start = _.once(function() {
  app.listen(app.get('port'), function() {
    app.emit('started');
    console.log(
      'FreeCodeCamp server listening on port %d in %s',
      app.get('port'),
      app.get('env')
    );
    if (isBeta) {
      console.log('Free Code Camp is in beta mode');
    }
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
