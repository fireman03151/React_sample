'use strict';

/**
 * Module dependencies.
 */

var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');
var nodemailer = require("nodemailer");
var User = require('../models/User');
var secrets = require('../config/secrets');

/**
 * Forgot Controller
 */

/**

 The general outline of the best practice is:

 1) Identify the user is a valid account holder. Use as much information as practical.
 - Email Address  (*Bare Minimin*)
 - Username
 - Account Number
 - Security Questions
 - Etc.

 2) Create a special one-time (nonce) token, with a expiration period, tied to the person's account.
 In this example We will store this in the database on the user's record.

 3) Send the user a link which contains the route ( /reset/:id/:token/ ) where the
 user can change their password.

 4) When the user clicks the link:
 - Lookup the user/nonce token and check expiration. If any issues send a message
 to the user: "this link is invalid".
 - If all good then continue - render password reset form.

 5) The user enters their new password (and possibly a second time for verification)
 and posts this back.

 6) Validate the password(s) meet complexity requirements and match.  If so, hash the
 password and save it to the database.  Here we will also clear the reset token.

 7) Email the user "Success, your password is reset".  This is important in case the user
 did not initiate the reset!

 7) Redirect the user.  Could be to the login page but since we know the users email and
 password we can simply authenticate them and redirect to a logged in location - usually
 home page.

 */


/**
 * GET /forgot
 * Forgot your password page.
 */

exports.getForgot = function(req, res) {
  if (req.user) return res.redirect('/');  //user already logged in!
  res.render('account/forgot', {
    title: 'Forgot Password'
  });
};

/**
 * POST /forgot
 * Reset Password.
 * @param {string} email
 */

exports.postForgot = function(req, res) {

  // Begin a workflow
  var workflow = new (require('events').EventEmitter)();

  /**
   * Step 1: Is the email valid?
   */

  workflow.on('validate', function() {

    // Check for form errors
    req.assert('email', 'Please enter a valid email address.').isEmail();
    var errors = req.validationErrors();

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/forgot');
    }

    // next step
    workflow.emit('generateToken');
  });

  /**
   * Step 2: Generate a one-time (nonce) token
   */

  workflow.on('generateToken', function() {
    // generate token
    crypto.randomBytes(24, function(err, buf) {
      if (err) return next(err);
      var token = buf.toString('base64');
      console.log(token);
      workflow.emit('saveToken', token)
    });
  });

  /**
   * Step 3: Save the token and token expiration
   */

  workflow.on('saveToken', function(token) {
    // lookup user
    User.findOne({ email: req.body.email.toLowerCase() }, function(err, user) {
      if (err) {
        req.flash('errors', err);
        return res.redirect('/forgot');
      }
      if (!user) {
        // If we didn't find a user associated with that
        // email address then just finish the workflow
        req.flash('info', { msg: 'If you have an account with that email address then we sent you an email with instructions. Check your email!' });
        return res.redirect('/forgot');
      }

      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

      // update the user's record with the token
      user.save(function(err) {
        if (err) {
          req.flash('errors', err);
          return res.redirect('/forgot');
        }
      });

      // next step
      workflow.emit('sendEmail', token, user);
    });
  });

  /**
   * Step 4: Send the user an email with a reset link
   */

  workflow.on('sendEmail', function(token, user) {
    var smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'SendGrid',
      auth: {
        user: secrets.sendgrid.user,
        pass: secrets.sendgrid.password
      }
    });

    var mailOptions = {
      to: user.profile.name + ' <' + user.email + '>',
      from: 'hackathon@starter.com',
      subject: 'Hackathon Starter Password Reset',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + req.headers.host + '/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };

    smtpTransport.sendMail(mailOptions, function(err) {
      if (err) {
        req.flash('errors', { msg: err.message });
        return res.redirect('/forgot');
      } else {
        // Message to user
        req.flash('info', { msg: 'We have sent an email to ' + user.email + ' for further instructions.' });
        return res.redirect('/forgot');
      }
    });

    // shut down the connection pool, no more messages
    smtpTransport.close();

  });

  /**
   * Initiate the workflow
   */

  workflow.emit('validate');

};
