var _ = require('underscore');
var colors = require('colors');
var fs = require('fs');
var inquirer = require('inquirer');
var M = require('mstring');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'white',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

inquirer.prompt({
  type: 'list',
  name: 'category',
  message: 'Hackathon Starter:',
  choices: ['☂ Authentication', '☎ Email Service', '☱ Exit']
}, function(answer) {

  if (answer.category.match('Email Service')) {
    inquirer.prompt({
      type: 'list',
      name: 'email',
      message: 'Choose Email Delivery Service:',
      choices: ['SendGrid', 'Mailgun', 'Cancel']
    }, function(answer) {

      var index;

      var contactControllerFile = 'controllers/contact.js';
      var userControllerFile = 'controllers/user.js';

      var contactController = fs.readFileSync(contactControllerFile).toString().split('\n');
      var userController = fs.readFileSync(userControllerFile).toString().split('\n');

      if (answer.email.match('SendGrid')) {

        // Change SMPT Transport to SendGrid in controllers/contact.js
        index = contactController.indexOf('var smtpTransport = nodemailer.createTransport(\'SMTP\', {');
        contactController.splice(index + 1, 1, '  service: \'SendGrid\',');
        contactController.splice(index + 3, 1, '       user: secrets.sendgrid.user,');
        contactController.splice(index + 4, 1, '       pass: secrets.sendgrid.password');
        fs.writeFileSync(contactControllerFile, contactController.join('\n'));

        // Change SMPT Transport to SendGrid in controllers/user.js
        index = userController.indexOf('      var smtpTransport = nodemailer.createTransport(\'SMTP\', {');
        userController.splice(index + 1, 1, '        service: \'SendGrid\',');
        userController.splice(index + 3, 1, '          user: secrets.sendgrid.user,');
        userController.splice(index + 4, 1, '          pass: secrets.sendgrid.password');
        index = userController.indexOf('      var smtpTransport = nodemailer.createTransport(\'SMTP\', {', 1);
        userController.splice(index + 1, 1, '        service: \'SendGrid\',');
        userController.splice(index + 3, 1, '          user: secrets.sendgrid.user,');
        userController.splice(index + 4, 1, '          pass: secrets.sendgrid.password');
        fs.writeFileSync(userControllerFile, userController.join('\n'));

        console.log('✓ Email Delivery Service has been switched to'.info, 'SendGrid'.help);
      }

      if (answer.email.match('Mailgun')) {

        // Change SMPT Transport to Mailgun in controllers/contact.js
        index = contactController.indexOf('var smtpTransport = nodemailer.createTransport(\'SMTP\', {');
        contactController.splice(index + 1, 1, '  service: \'Mailgun\',');
        contactController.splice(index + 3, 1, '       user: secrets.mailgun.login,');
        contactController.splice(index + 4, 1, '       pass: secrets.mailgun.password');
        fs.writeFileSync(contactControllerFile, contactController.join('\n'));

        // Change SMPT Transport to Mailgun in controllers/user.js
        index = userController.indexOf('      var smtpTransport = nodemailer.createTransport(\'SMTP\', {');
        userController.splice(index + 1, 1, '        service: \'Mailgun\',');
        userController.splice(index + 3, 1, '          user: secrets.mailgun.login,');
        userController.splice(index + 4, 1, '          pass: secrets.mailgun.password');
        index = userController.indexOf('      var smtpTransport = nodemailer.createTransport(\'SMTP\', {', 1);
        userController.splice(index + 1, 1, '        service: \'Mailgun\',');
        userController.splice(index + 3, 1, '          user: secrets.mailgun.login,');
        userController.splice(index + 4, 1, '          pass: secrets.mailgun.password');
        fs.writeFileSync(userControllerFile, userController.join('\n'));

        console.log('✓ Email Delivery Service has been switched to'.info, '@'.error + 'mail'.data + 'gun'.error);
      }
    });
  }

  if (answer.category.match('Authentication')) {
    inquirer.prompt({
      type: 'checkbox',
      message: 'Select Authentication Providers',
      name: 'auth',
      choices: [
        new inquirer.Separator(M(function() {
          /***

           ╔══════════════════════════════════════════════════════════════════════╗
           ║ THIS TOOL IS STILL IN EXPERIMENTAL STAGE! USE AT YOUR OWN RISK.      ║
           ║ ALWAYS USE VERSION CONTROL SYSTEM SO YOU COULD REVERT THE CHANGES.   ║
           ║ REPORT BUGS AT HTTPS://GITHUB.COM/SAHAT/HACKATHON-STARTER/ISSUES/NEW ║
           ╚══════════════════════════════════════════════════════════════════════╝

          ***/
        })),
        { name: 'Facebook', checked: true },
        { name: 'GitHub', checked: true },
        { name: 'Google', checked: true },
        { name: 'Twitter', checked: true },
        { name: 'LinkedIn', checked: true },
        { name: 'Instagram' },
        new inquirer.Separator('Press ctrl+c to cancel'.warn)
      ],
      validate: function(answer) {
        if (answer.length < 1) return 'You must choose at least one authentication provider.';
        return true;
      }
    }, function(answer) {
      var index;

      var passportConfigFile = 'config/passport.js';
      var userModelFile = 'models/User.js';
      var appFile = 'app.js';
      var secretsFile = 'config/secrets.js';
      var profileTemplateFile = 'views/account/profile.jade';
      var loginTemplateFile = 'views/account/login.jade';

      var passportConfig = fs.readFileSync(passportConfigFile).toString().split('\n');
      var loginTemplate = fs.readFileSync(loginTemplateFile).toString().split('\n');
      var profileTemplate = fs.readFileSync(profileTemplateFile).toString().split('\n');
      var userModel = fs.readFileSync(userModelFile).toString().split('\n');
      var app = fs.readFileSync(appFile).toString().split('\n');
      var secrets = fs.readFileSync(secretsFile).toString().split('\n');

      if (_.contains(answer.auth, 'Facebook')) {
        var facebookStrategyRequire = "var FacebookStrategy = require('passport-facebook').Strategy;";
        var facebookStrategy = M(function() {
          /***
          // Sign in with Facebook.

          passport.use(new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
            if (req.user) {
              User.findOne({ $or: [{ facebook: profile.id }, { email: profile.email }] }, function(err, existingUser) {
                if (existingUser) {
                  req.flash('errors', { msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                  done(err);
                } else {
                  User.findById(req.user.id, function(err, user) {
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken: accessToken });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.gender = user.profile.gender || profile._json.gender;
                    user.profile.picture = user.profile.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                    user.save(function(err) {
                      req.flash('info', { msg: 'Facebook account has been linked.' });
                      done(err, user);
                    });
                  });
                }
              });
            } else {
              User.findOne({ facebook: profile.id }, function(err, existingUser) {
                if (existingUser) return done(null, existingUser);
                User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
                  if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
                    done(err);
                  } else {
                    var user = new User();
                    user.email = profile._json.email;
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken: accessToken });
                    user.profile.name = profile.displayName;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                    user.profile.location = (profile._json.location) ? profile._json.location.name : '';
                    user.save(function(err) {
                      done(err, user);
                    });
                  }
                });
              });
            }
          }));

          ***/
        });
        var facebookButton = M(function() {
          /***
           a.btn.btn-block.btn-facebook.btn-social(href='/auth/facebook')
             i.fa.fa-facebook
             | Sign in with Facebook
           ***/
        });
        var facebookLinkUnlink = M(function() {
          /***

           if user.facebook
             p: a.text-danger(href='/account/unlink/facebook') Unlink your Facebook account
           else
             p: a(href='/auth/facebook') Link your Facebook account
           ***/
        });
        var facebookModel = '  facebook: String,';

        if (passportConfig.indexOf(facebookStrategyRequire) < 0) {

          // config/passport.js (+)
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, facebookStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, facebookStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // views/account/login.jade (+)
          loginTemplate.push(facebookButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // views/account/profile.jade (+)
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, facebookLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // models/User.js (+)
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, facebookModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          console.log('✓ Facebook authentication has been added.'.info);
        } else {
          console.log('✓ Facebook authentication is already active.'.data);
        }
      } else {

        // config/passport.js (-)
        index = passportConfig.indexOf(facebookStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with Facebook.');
        passportConfig.splice(index, 47);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // views/account/login.jade (-)
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-facebook.btn-social(href='/auth/facebook')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // views/account/profile.jade (-)
        index = profileTemplate.indexOf("  if user.facebook");
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // models/User.js (-)
        index = userModel.indexOf('  facebook: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('✗ Facebook authentication has been removed.'.error);
      }

      if (_.contains(answer.auth, 'GitHub')) {
        var githubStrategyRequire = "var GitHubStrategy = require('passport-github').Strategy;";
        var githubStrategy = M(function() {
          /***
          // Sign in with GitHub.

          passport.use(new GitHubStrategy(secrets.github, function(req, accessToken, refreshToken, profile, done) {
            if (req.user) {
              User.findOne({ $or: [{ github: profile.id }, { email: profile.email }] }, function(err, existingUser) {
                if (existingUser) {
                  req.flash('errors', { msg: 'There is already a GitHub account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                  done(err);
                } else {
                  User.findById(req.user.id, function(err, user) {
                    user.github = profile.id;
                    user.tokens.push({ kind: 'github', accessToken: accessToken });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.picture = user.profile.picture || profile._json.avatar_url;
                    user.profile.location = user.profile.location || profile._json.location;
                    user.profile.website = user.profile.website || profile._json.blog;
                    user.save(function(err) {
                      req.flash('info', { msg: 'GitHub account has been linked.' });
                      done(err, user);
                    });
                  });
                }
              });
            } else {
              User.findOne({ github: profile.id }, function(err, existingUser) {
                if (existingUser) return done(null, existingUser);
                User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
                  if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with GitHub manually from Account Settings.' });
                    done(err);
                  } else {
                    var user = new User();
                    user.email = profile._json.email;
                    user.github = profile.id;
                    user.tokens.push({ kind: 'github', accessToken: accessToken });
                    user.profile.name = profile.displayName;
                    user.profile.picture = profile._json.avatar_url;
                    user.profile.location = profile._json.location;
                    user.profile.website = profile._json.blog;
                    user.save(function(err) {
                      done(err, user);
                    });
                  }
                });
              });
            }
          }));

          ***/
        });

        var githubButton = M(function() {
          /***
           a.btn.btn-block.btn-github.btn-social(href='/auth/github')
             i.fa.fa-github
             | Sign in with GitHub
           ***/
        });
        var githubLinkUnlink = M(function() {
          /***

           if user.github
             p: a.text-danger(href='/account/unlink/github') Unlink your GitHub account
           else
             p: a(href='/auth/github') Link your GitHub account
           ***/
        });
        var githubModel = '  github: String,';

        if (passportConfig.indexOf(githubStrategyRequire) < 0) {

          // config/passport.js (+)
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, githubStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, githubStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // views/account/login.jade (+)
          loginTemplate.push(githubButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // views/account/profile.jade (+)
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, githubLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // models/User.js (+)
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, githubModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          console.log('✓ GitHub authentication has been added.'.info);
        } else {
          console.log('✓ GitHub authentication is already active.'.data);
        }
      } else {

        // config/passport.js (-)
        index = passportConfig.indexOf(githubStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with GitHub.');
        passportConfig.splice(index, 48);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // views/account/login.jade (-)
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-github.btn-social(href='/auth/github')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // views/account/profile.jade (-)
        index = profileTemplate.indexOf('  if user.github');
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // models/User.js (-)
        index = userModel.indexOf('  github: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('✗ GitHub authentication has been removed.'.error);
      }

      if (_.contains(answer.auth, 'Google')) {
        var googleStrategyRequire = "var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;";
        var googleStrategy = M(function() {
          /***
          // Sign in with Google.

          passport.use(new GoogleStrategy(secrets.google, function(req, accessToken, refreshToken, profile, done) {
            if (req.user) {
              User.findOne({ $or: [{ google: profile.id }, { email: profile.email }] }, function(err, existingUser) {
                if (existingUser) {
                  req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                  done(err);
                } else {
                  User.findById(req.user.id, function(err, user) {
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken: accessToken });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.gender = user.profile.gender || profile._json.gender;
                    user.profile.picture = user.profile.picture || profile._json.picture;
                    user.save(function(err) {
                      req.flash('info', { msg: 'Google account has been linked.' });
                      done(err, user);
                    });
                  });
                }
              });
            } else {
              User.findOne({ google: profile.id }, function(err, existingUser) {
                if (existingUser) return done(null, existingUser);
                User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
                  if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.' });
                    done(err);
                  } else {
                    var user = new User();
                    user.email = profile._json.email;
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken: accessToken });
                    user.profile.name = profile.displayName;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = profile._json.picture;
                    user.save(function(err) {
                      done(err, user);
                    });
                  }
                });
              });
            }
          }));

          ***/
        });

        var googleButton = M(function() {
          /***
           a.btn.btn-block.btn-google-plus.btn-social(href='/auth/google')
             i.fa.fa-google-plus
             | Sign in with Google
           ***/
        });
        var googleLinkUnlink = M(function() {
          /***

           if user.google
             p: a.text-danger(href='/account/unlink/google') Unlink your Google account
           else
             p: a(href='/auth/google') Link your Google account
           ***/
        });
        var googleModel = '  google: String,';

        if (passportConfig.indexOf(googleStrategyRequire) < 0) {

          // config/passport.js (+)
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, googleStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, googleStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // views/account/login.jade (+)
          loginTemplate.push(googleButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // views/account/profile.jade (+)
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, googleLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // models/User.js (+)
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, googleModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          console.log('✓ Google authentication has been added.'.info);
        } else {
          console.log('✓ Google authentication is already active.'.data);
        }
      } else {

        // config/passport.js (-)
        index = passportConfig.indexOf(googleStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with Google.');
        passportConfig.splice(index, 46);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // views/account/login.jade (-)
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-google-plus.btn-social(href='/auth/google')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // views/account/profile.jade (-)
        index = profileTemplate.indexOf('  if user.google');
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // models/User.js (-)
        index = userModel.indexOf('  google: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('✗ Google authentication has been removed.'.error);
      }

      if (_.contains(answer.auth, 'Twitter')) {
        var twitterStrategyRequire = "var TwitterStrategy = require('passport-twitter').Strategy;";
        var twitterStrategy = M(function() {
          /***
          // Sign in with Twitter.

          passport.use(new TwitterStrategy(secrets.twitter, function(req, accessToken, tokenSecret, profile, done) {
            if (req.user) {
              User.findOne({ twitter: profile.id }, function(err, existingUser) {
                if (existingUser) {
                  req.flash('errors', { msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                  done(err);
                } else {
                  User.findById(req.user.id, function(err, user) {
                    user.twitter = profile.id;
                    user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.location = user.profile.location || profile._json.location;
                    user.profile.picture = user.profile.picture || profile._json.profile_image_url;
                    user.save(function(err) {
                      req.flash('info', { msg: 'Twitter account has been linked.' });
                      done(err, user);
                    });
                  });
                }
              });

            } else {
              User.findOne({ twitter: profile.id }, function(err, existingUser) {
                if (existingUser) return done(null, existingUser);
                var user = new User();
                // Twitter will not provide an email address.  Period.
                // But a person’s twitter username is guaranteed to be unique
                // so we can "fake" a twitter email address as follows:
                user.email = profile.username + "@twitter.com";
                     user.twitter = profile.id;
                     user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
                     user.profile.name = profile.displayName;
                     user.profile.location = profile._json.location;
                     user.profile.picture = profile._json.profile_image_url;
                     user.save(function(err) {
                  done(err, user);
                });
              });
            }
          }));
          ***/
        });

        var twitterButton = M(function() {
          /***
           a.btn.btn-block.btn-google-plus.btn-social(href='/auth/google')
           i.fa.fa-google-plus
           | Sign in with Google
           ***/
        });
        var twitterLinkUnlink = M(function() {
          /***

           if user.google
           p: a.text-danger(href='/account/unlink/google') Unlink your Google account
           else
           p: a(href='/auth/google') Link your Google account
           ***/
        });
        var twitterModel = '  twitter: String,';

        if (passportConfig.indexOf(twitterStrategyRequire) < 0) {

          // config/passport.js (+)
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, twitterStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, twitterStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // views/account/login.jade (+)
          loginTemplate.push(twitterButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // views/account/profile.jade (+)
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, twitterLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // models/User.js (+)
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, twitterModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          console.log('✓ Twitter authentication has been added.'.info);
        } else {
          console.log('✓ Twitter authentication is already active.'.data);
        }
      } else {

        // config/passport.js (-)
        index = passportConfig.indexOf(twitterStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with Twitter.');
        passportConfig.splice(index, 43);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // views/account/login.jade (-)
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-twitter.btn-social(href='/auth/twitter')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // views/account/profile.jade (-)
        index = profileTemplate.indexOf('  if user.twitter');
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // models/User.js (-)
        index = userModel.indexOf('  twitter: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('✗ Twitter authentication has been removed.'.error);
      }

      /////////////////////////////
      // LinkedIn Authentication //
      /////////////////////////////

      var linkedinRoutes = M(function() {
        /***
        app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
        app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), function(req, res) {
          res.redirect(req.session.returnTo || '/');
        });
        ***/
      });
      var linkedinStrategyRequire = "var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;";
      var linkedinStrategy = M(function() {
        /***
        // Sign in with LinkedIn.

        passport.use(new LinkedInStrategy(secrets.linkedin, function(req, accessToken, refreshToken, profile, done) {
          if (req.user) {
            User.findOne({ $or: [
              { linkedin: profile.id },
              { email: profile._json.emailAddress }
            ] }, function(err, existingUser) {
              if (existingUser) {
                req.flash('errors', { msg: 'There is already a LinkedIn account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
              } else {
                User.findById(req.user.id, function(err, user) {
                  user.linkedin = profile.id;
                  user.tokens.push({ kind: 'linkedin', accessToken: accessToken });
                  user.profile.name = user.profile.name || profile.displayName;
                  user.profile.location = user.profile.location || profile._json.location.name;
                  user.profile.picture = user.profile.picture || profile._json.pictureUrl;
                  user.profile.website = user.profile.website || profile._json.publicProfileUrl;
                  user.save(function(err) {
                    req.flash('info', { msg: 'LinkedIn account has been linked.' });
                    done(err, user);
                  });
                });
              }
            });
          } else {
            User.findOne({ linkedin: profile.id }, function(err, existingUser) {
              if (existingUser) return done(null, existingUser);
              User.findOne({ email: profile._json.emailAddress }, function(err, existingEmailUser) {
                if (existingEmailUser) {
                  req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with LinkedIn manually from Account Settings.' });
                  done(err);
                } else {
                  var user = new User();
                  user.linkedin = profile.id;
                  user.tokens.push({ kind: 'linkedin', accessToken: accessToken });
                  user.email = profile._json.emailAddress;
                  user.profile.name = profile.displayName;
                  user.profile.location = profile._json.location.name;
                  user.profile.picture = profile._json.pictureUrl;
                  user.profile.website = profile._json.publicProfileUrl;
                  user.save(function(err) {
                    done(err, user);
                  });
                }
              });
            });
          }
        }));
        ***/
      });

      var linkedinButton = M(function() {
        /***
              a.btn.btn-block.btn-linkedin.btn-social(href='/auth/linkedin')
                i.fa.fa-linkedin
                | Sign in with LinkedIn
        ***/
      });
      var linkedinLinkUnlink = M(function() {
        /***

          if user.linkedin
            p: a.text-danger(href='/account/unlink/linkedin') Unlink your LinkedIn account
          else
            p: a(href='/auth/linkedin') Link your LinkedIn account
        ***/
      });
      var linkedinModel = '  linkedin: String,';

      if (_.contains(answer.auth, 'LinkedIn')) {
        if (passportConfig.indexOf(linkedinStrategyRequire) < 0) {

          // Add LinkedIn to passport.js
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, linkedinStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, linkedinStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // Add LinkedIn to login.jade
          loginTemplate.push(linkedinButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // Add LinkedIn to profile.jade
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, linkedinLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // Add LinkedIn to models/User.js
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, linkedinModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          // Add LinkedIn to app.js
          index = app.indexOf(' * OAuth routes for sign-in.');
          app.splice(index + 3, 0, linkedinRoutes);
          fs.writeFileSync(appFile, app.join('\n'));

          console.log('✓ LinkedIn authentication has been added.'.info);
        } else {
          console.log('✓ LinkedIn authentication is already active.'.data);
        }
      } else {

        // Check if we have LinkedIn authentication to begin with.
        if (passportConfig.indexOf(linkedinStrategyRequire) < 0) return;

        // Removed LinkedIn from passport.js
        index = passportConfig.indexOf(linkedinStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with LinkedIn.');
        passportConfig.splice(index, 51);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // Remove LinkedIn from login.jade
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-linkedin.btn-social(href='/auth/linkedin')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // Remove LinkedIn from profile.jade
        index = profileTemplate.indexOf('  if user.linkedin');
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // Remove LinkedIn from app.js
        index = app.indexOf("app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));");
        app.splice(index, 4);
        fs.writeFileSync(appFile, app.join('\n'));

        // Remove LinkedIn from User.js
        index = userModel.indexOf('  linkedin: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('✗ LinkedIn authentication has been removed.'.error);
      }

      //////////////////////////////
      // Instagram Authentication //
      //////////////////////////////

      var instagramRoutes = M(function() {
        /***
        app.get('/auth/instagram', passport.authenticate('instagram'));
        app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), function(req, res) {
          res.redirect(req.session.returnTo || '/');
        });
        ***/
      });
      var instagramSecrets = M(function() {
        /***
           instagram: {
             clientID: process.env.INSTAGRAM_ID || 'Your Client ID',
             clientSecret: process.env.INSTAGRAM_SECRET || 'Your Client Secret',
             callbackURL: '/auth/instagram/callback',
             passReqToCallback: true
           },

         ***/
      });
      var instagramStrategyRequire = "var InstagramStrategy = require('passport-instagram').Strategy;";
      var instagramStrategy = M(function() {
        /***
        // Sign in with Instagram.

        passport.use(new InstagramStrategy(secrets.instagram,function(req, accessToken, refreshToken, profile, done) {
          if (req.user) {
            User.findOne({ $or: [{ instagram: profile.id }, { email: profile.email }] }, function(err, existingUser) {
              if (existingUser) {
                req.flash('errors', { msg: 'There is already an Instagram account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
              } else {
                User.findById(req.user.id, function(err, user) {
                  user.instagram = profile.id;
                  user.tokens.push({ kind: 'instagram', accessToken: accessToken });
                  user.profile.name = user.profile.name || profile.displayName;
                  user.profile.picture = user.profile.picture || profile._json.data.profile_picture;
                  user.profile.website = user.profile.website || profile._json.data.website;
                  user.save(function(err) {
                    req.flash('info', { msg: 'Instagram account has been linked.' });
                    done(err, user);
                  });
                });
              }
            });
          } else {
            User.findOne({ instagram: profile.id }, function(err, existingUser) {
              if (existingUser) return done(null, existingUser);

              var user = new User();
              user.instagram = profile.id;
              user.tokens.push({ kind: 'instagram', accessToken: accessToken });
              user.profile.name = profile.displayName;
              user.email = '';
              user.profile.website = profile._json.data.website;
              user.profile.picture = profile._json.data.profile_picture;
              user.save(function(err) {
                done(err, user);
              });
            });
          }
        }));

        ***/
      });

      var instagramButton = M(function() {
        /***
              a.btn.btn-block.btn-instagram.btn-social(href='/auth/instagram')
                i.fa.fa-instagram
                | Sign in with Instagram
        ***/
      });
      var instagramLinkUnlink = M(function() {
        /***

          if user.instagram
            p: a.text-danger(href='/account/unlink/instagram') Unlink your Instagram account
          else
            p: a(href='/auth/instagram') Link your Instagram account
        ***/
      });
      var instagramModel = '  instagram: String,';

      if (_.contains(answer.auth, 'Instagram')) {

        if (passportConfig.indexOf(instagramStrategyRequire) < 0) {

          // Add Instagram to passport.js
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, instagramStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, instagramStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // Add Instagram to login.jade
          loginTemplate.push(instagramButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // Add Instagram to profile.jade
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, instagramLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // Add Instagram to User.js
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, instagramModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          // Add Instagram to app.js
          index = app.indexOf(' * OAuth routes for sign-in.');
          app.splice(index + 3, 0, instagramRoutes);
          fs.writeFileSync(appFile, app.join('\n'));

          // Add Instagram to secrets.js
          index = secrets.indexOf('module.exports = {');
          secrets.splice(index + 1, 0, instagramSecrets);
          fs.writeFileSync(secretsFile, secrets.join('\n'));

          console.log('✓ Instagram authentication has been added.'.info);
        } else {
          console.log('✓ Instagram authentication is already active.'.data);
        }
      } else {

        if (passportConfig.indexOf(instagramStrategyRequire) < 0) return;

        // Remove Instagram from passport.js
        index = passportConfig.indexOf(instagramStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with Instagram.');
        passportConfig.splice(index, 40);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // Remove Instagram from login.jade
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-instagram.btn-social(href='/auth/instagram')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // Remove Instagram from profile.jade
        index = profileTemplate.indexOf('  if user.instagram');
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // Remove Instagram from app.js
        index = app.indexOf("app.get('/auth/instagram', passport.authenticate('instagram'));");
        app.splice(index, 4);
        fs.writeFileSync(appFile, app.join('\n'));

        // Remove Instagram from secrets.js
        index = secrets.indexOf('  instagram: {');
        secrets.splice(index, 7);
        fs.writeFileSync(secretsFile, secrets.join('\n'));

        // Remove Instagram from User.js
        index = userModel.indexOf('  instagram: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('✗ Instagram authentication has been removed.'.error);
      }
    });
  }
});