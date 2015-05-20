var async = require('async'),
  User = require('../models/User'),
  Bonfire = require('./../models/Bonfire'),
  Story = require('./../models/Story'),
  Nonprofit = require('./../models/Nonprofit'),
  Comment = require('./../models/Comment'),
  Challenge = require('./../models/Challenge'),
  resources = require('./resources'),
  steps = resources.steps,
  secrets = require('./../config/secrets'),
  nonprofits = require('../seed_data/nonprofits.json'),
  moment = require('moment'),
  https = require('https'),
  debug = require('debug')('freecc:cntr:resources'),
  cheerio = require('cheerio'),
  request = require('request'),
  R = require('ramda');

var challengeTypes = {
  'HTML_CSS_JQ': 0,
  'JAVASCRIPT': 1,
  'VIDEO': 2,
  'ZIPLINE': 3,
  'BASEJUMP': 4,
  'BONFIRE': 5
};

module.exports = {
  challengeMap: function challengeMap(req, res) {
    var completedBonfires = [];
    var completedList = [];

    if (req.user) {
      completedBonfires = req.user.completedChallenges
        .filter(function (elem) {
          return elem.challengeType === challengeTypes.BONFIRE;
        })
        .map(function(elem) {
          return elem._id;
        });
    }

    if (req.user) {
      completedList = req.user.completedChallenges
        .filter(function (elem) {
          return elem.challengeType !== challengeTypes.BONFIRE;
        });
    }

    var noDuplicateBonfires = R.uniq(completedBonfires);
    var noDuplicatedChallenges = R.uniq(completedList);

    var completedBonfireList = noDuplicateBonfires
      .map(function(bonfire) {
        return bonfire._id;
      });
    var challengeList = resources.allChallenges();
    var completedChallengeList = noDuplicatedChallenges
      .map(function(challenge) {
        return challenge._id;
      });

    var bonfireList = challengeList
      .filter(function(challenge) {
        return challenge.challengeType === challengeTypes.BONFIRE;
      })
      .map(function(bonfire) {
        return ({
          '_id': bonfire._id,
          'name': bonfire.name
        });
      });

    var waypoints = challengeList.filter(function(challenge) {
      if (challenge.challengeType === challengeTypes.VIDEO
          || challenge.challengeType === challengeTypes.HTML_CSS_JQ
          || challenge.challengeType === challengeTypes.JAVASCRIPT) {
        return challenge;
      }
    }).map(function(waypoint) {
      return ({
        '_id': waypoint._id,
        'name': waypoint.name
      });
    });

    var ziplines = challengeList.filter(function(challenge) {
      if (challenge.challengeType === challengeTypes.ZIPLINE) {
        return challenge;
      }
    }).map(function(zipline) {
      return ({
        '_id': zipline._id,
        'name': zipline.name
      });
    });

    var basejumps = challengeList.filter(function(challenge) {
      if (challenge.challengeType === challengeTypes.BASEJUMP) {
        return challenge;
      }
    }).map(function(basejump) {
      return ({
        '_id': basejump._id,
        'name': basejump.name
      });
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var date1 = new Date("10/15/2014");
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));

    User.count({}, function (err, camperCount) {
      if (err) {
        debug('User err: ', err);
        return next(err);
      }
      debug('Data for render is: ', completedBonfireList, completedChallengeList);
      res.render('challengeMap/show', {
        daysRunning: daysRunning,
        camperCount: numberWithCommas(camperCount),
        title: "A map of all Free Code Camp's Challenges",
        bonfires: bonfireList,
        waypoints: waypoints,
        ziplines: ziplines,
        basejumps: basejumps,
        completedBonfireList: completedBonfireList,
        completedChallengeList: completedChallengeList
      });
    });
  }
};
