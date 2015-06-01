/**
 * Created by nathanleniz on 5/15/15.
 * Copyright (c) 2015, Free Code Camp
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

 3. Neither the name of the copyright holder nor the names of its contributors
  may be used to endorse or promote products derived from this software
  without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
 BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var R = require('ramda'),
    Challenge = require('./../../models/Challenge'),
    User = require('./../../models/User'),
    resources = require('./../resources/resources'),
    MDNlinks = require('./../../seed_data/bonfireMDNlinks');

var challengeMapWithNames = resources.getChallengeMapWithNames();
var challengeMapWithIds = resources.getChallengeMapWithIds();

function getMDNlinks(links) {
  // takes in an array of links, which are strings
  var populatedLinks = [];

  // for each key value, push the corresponding link
  // from the MDNlinks object into a new array
  if (links) {
    links.forEach(function (value) {
      populatedLinks.push(MDNlinks[value]);
    });
  }
  return populatedLinks;
}

exports.returnNextChallenge = function(req, res, next) {
  if (!req.user) {
   return res.redirect('../challenges/learn-how-free-code-camp-works');
  }
  var completed = req.user.completedChallenges.map(function (elem) {
    return elem._id;
  });

  req.user.uncompletedChallenges = resources.allChallengeIds()
    .filter(function (elem) {
      if (completed.indexOf(elem) === -1) {
        return elem;
      }
    });

  // find the user's current challenge and block
  // look in that block and find the index of their current challenge
  // if index + 1 < block.challenges.length
  // serve index + 1 challenge
  // otherwise increment block key and serve the first challenge in that block
  // unless the next block is undefined, which means no next block
  var nextChallengeName;

  var challengeId = String(req.user.currentChallenge.challengeId);
  var challengeBlock = req.user.currentChallenge.challengeBlock;
  var indexOfChallenge = challengeMapWithIds[challengeBlock]
    .indexOf(challengeId);

  if (indexOfChallenge + 1
    < challengeMapWithIds[challengeBlock].length) {
    nextChallengeName =
      challengeMapWithNames[challengeBlock][++indexOfChallenge];
  } else if (typeof challengeMapWithIds[++challengeBlock] !== 'undefined') {
    nextChallengeName = R.head(challengeMapWithNames[challengeBlock]);
  } else {
    req.flash('errors', {
      msg: 'It looks like you have finished all of our challenges.' +
      ' Great job! Now on to helping nonprofits!'
    });
    nextChallengeName = R.head(challengeMapWithNames[0].challenges);
  }

  var nameString = nextChallengeName.trim()
    .toLowerCase()
    .replace(/\s/g, '-');

  req.user.save(function(err) {
    if (err) {
      return next(err);
    }
    return res.redirect('../challenges/' + nameString);
  });
};

exports.returnCurrentChallenge = function(req, res, next) {
  if (!req.user) {
   return res.redirect('../challenges/learn-how-free-code-camp-works');
  }
  var completed = req.user.completedChallenges.map(function (elem) {
    return elem._id;
  });

  req.user.uncompletedChallenges = resources.allChallengeIds()
    .filter(function (elem) {
      if (completed.indexOf(elem) === -1) {
        return elem;
      }
    });
  if (!req.user.currentChallenge) {
    req.user.currentChallenge = {};
    req.user.currentChallenge.challengeId = challengeMapWithIds['0'][0];
    req.user.currentChallenge.challengeName = challengeMapWithNames['0'][0];
    req.user.currentChallenge.challengeBlock = '0';
    req.user.save(function(err) {
      if (err) {
        return next(err);
      }
    });
  }
  var nameString = req.user.currentChallenge.challengeName.trim()
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-\/.]/gi, '');
  req.user.save(function(err) {
    if (err) {
      return next(err);
    }
    return res.redirect('../challenges/' + nameString);
  });
};

exports.returnIndividualChallenge = function(req, res, next) {
  var dashedName = req.params.challengeName;

  var challengeName = /^(bonfire|waypoint|zipline|basejump)/i.test(dashedName) ? dashedName
      .replace(/\-/g, ' ')
      .split(' ')
      .slice(1)
      .join(' ')
    : dashedName.replace(/\-/g, ' ');

  Challenge.find({'name': new RegExp(challengeName, 'i')},
    function(err, challengeFromMongo) {
      if (err) {
        return next(err);
      }
      // Handle not found
      if (challengeFromMongo.length < 1) {
        req.flash('errors', {
          msg: '404: We couldn\'t find a challenge with that name. ' +
          'Please double check the name.'
        });
        return res.redirect('/challenges');
      }
      var challenge = challengeFromMongo.pop();
      // Redirect to full name if the user only entered a partial
      var dashedNameFull = challenge.name
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^a-z0-9\-\.]/gi, '');
      if (dashedNameFull !== dashedName) {
        return res.redirect('../challenges/' + dashedNameFull);
      } else {
        if (req.user) {
          req.user.currentChallenge = {
            challengeId: challenge._id,
            challengeName: challenge.name,
            challengeBlock: R.head(R.flatten(Object.keys(challengeMapWithIds).
                map(function (key) {
                  return challengeMapWithIds[key]
                    .filter(function (elem) {
                      return String(elem) === String(challenge._id);
                    }).map(function () {
                      return key;
                    });
                })
            ))
          };
        }
      }

      var challengeType = {
        0: function() {
          res.render('coursewares/showHTML', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            brief: challenge.description[0],
            details: challenge.description.slice(1),
            tests: challenge.tests,
            challengeSeed: challenge.challengeSeed,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            challengeId: challenge._id,
            environment: resources.whichEnvironment(),
            challengeType: challenge.challengeType
          });
        },

        1: function() {
          res.render('coursewares/showJS', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            brief: challenge.description[0],
            details: challenge.description.slice(1),
            tests: challenge.tests,
            challengeSeed: challenge.challengeSeed,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            challengeId: challenge._id,
            challengeType: challenge.challengeType
          });
        },

        2: function() {
          res.render('coursewares/showVideo', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            details: challenge.description,
            tests: challenge.tests,
            video: challenge.challengeSeed[0],
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            challengeId: challenge._id,
            challengeType: challenge.challengeType
          });
        },

        3: function() {
          res.render('coursewares/showZiplineOrBasejump', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            details: challenge.description,
            video: challenge.challengeSeed[0],
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            challengeId: challenge._id,
            challengeType: challenge.challengeType
          });
        },

        4: function() {
          res.render('coursewares/showZiplineOrBasejump', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            details: challenge.description,
            video: challenge.challengeSeed[0],
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            challengeId: challenge._id,
            challengeType: challenge.challengeType
          });
        },

        5: function() {
          res.render('coursewares/showBonfire', {
            completedWith: null,
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            difficulty: Math.floor(+challenge.difficulty),
            brief: challenge.description.shift(),
            details: challenge.description,
            tests: challenge.tests,
            challengeSeed: challenge.challengeSeed,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            bonfires: challenge,
            challengeId: challenge._id,
            MDNkeys: challenge.MDNlinks,
            MDNlinks: getMDNlinks(challenge.MDNlinks),
            challengeType: challenge.challengeType
          });
        }
      };
      if (req.user) {
        req.user.save(function (err) {
          if (err) {
            return next(err);
          }
          return challengeType[challenge.challengeType]();
        });
      } else {
        return challengeType[challenge.challengeType]();
      }
    });
};

exports.completedBonfire = function (req, res, next) {
  var isCompletedWith = req.body.challengeInfo.completedWith || '';
  var isCompletedDate = Math.round(+new Date());
  var challengeId = req.body.challengeInfo.challengeId;
  var isSolution = req.body.challengeInfo.solution;
  var challengeName = req.body.challengeInfo.challengeName;

  if (isCompletedWith) {
    var paired = User.find({'profile.username': isCompletedWith.toLowerCase()})
      .limit(1);
    paired.exec(function (err, pairedWith) {
      if (err) {
        return next(err);
      } else {
        var index = req.user.uncompletedChallenges.indexOf(challengeId);
        if (index > -1) {
          req.user.progressTimestamps.push(Date.now() || 0);
          req.user.uncompletedChallenges.splice(index, 1);
        }
        pairedWith = pairedWith.pop();
        if (pairedWith) {

          index = pairedWith.uncompletedChallenges.indexOf(challengeId);
          if (index > -1) {
            pairedWith.progressTimestamps.push(Date.now() || 0);
            pairedWith.uncompletedChallenges.splice(index, 1);

          }

          pairedWith.completedChallenges.push({
            _id: challengeId,
            name: challengeName,
            completedWith: req.user._id,
            completedDate: isCompletedDate,
            solution: isSolution,
            challengeType: 5
          });

          req.user.completedChallenges.push({
            _id: challengeId,
            name: challengeName,
            completedWith: pairedWith._id,
            completedDate: isCompletedDate,
            solution: isSolution,
            challengeType: 5
          });
        }
        // User said they paired, but pair wasn't found
          req.user.completedChallenges.push({
            _id: challengeId,
            name: challengeName,
            completedWith: null,
            completedDate: isCompletedDate,
            solution: isSolution,
            challengeType: 5
          });


        req.user.save(function (err, user) {
          if (err) {
            return next(err);
          }
          if (pairedWith) {
            pairedWith.save(function (err, paired) {
              if (err) {
                return next(err);
              }
              if (user && paired) {
                res.send(true);
              }
            });
          } else {
            if (user) {
              res.send(true);
            }
          }
        });
      }
    });
  } else {
    req.user.completedChallenges.push({
      _id: challengeId,
      name: challengeName,
      completedWith: null,
      completedDate: isCompletedDate,
      solution: isSolution,
      challengeType: 5
    });

    var index = req.user.uncompletedChallenges.indexOf(challengeId);
    if (index > -1) {

      req.user.progressTimestamps.push(Date.now() || 0);
      req.user.uncompletedChallenges.splice(index, 1);
    }

    req.user.save(function (err, user) {
      if (err) {
        return next(err);
      }
      // NOTE(berks): Under certain conditions the res is never ended
      if (user) {
        res.send(true);
      }
    });
  }
};

exports.completedChallenge = function (req, res, next) {

  var isCompletedDate = Math.round(+new Date());
  var challengeId = req.body.challengeInfo.challengeId;

  req.user.completedChallenges.push({
    _id: challengeId,
    completedDate: isCompletedDate,
    name: req.body.challengeInfo.challengeName,
    solution: null,
    githubLink: null,
    verified: true
  });
  var index = req.user.uncompletedChallenges.indexOf(challengeId);

  if (index > -1) {
    req.user.progressTimestamps.push(Date.now() || 0);
    req.user.uncompletedChallenges.splice(index, 1);
  }

  req.user.save(function (err, user) {
    if (err) {
      return next(err);
    }
    if (user) {
      res.sendStatus(200);
    }
  });
};

exports.completedZiplineOrBasejump = function (req, res, next) {

  var isCompletedWith = req.body.challengeInfo.completedWith || false;
  var isCompletedDate = Math.round(+new Date());
  var challengeId = req.body.challengeInfo.challengeId;
  var solutionLink = req.body.challengeInfo.publicURL;
  var githubLink = req.body.challengeInfo.challengeType === '4'
    ? req.body.challengeInfo.githubURL : true;
  var challengeType = req.body.challengeInfo.challengeType === '4' ?
    4 : 3;
  if (!solutionLink || !githubLink) {
    req.flash('errors', {
      msg: 'You haven\'t supplied the necessary URLs for us to inspect ' +
      'your work.'
    });
    return res.sendStatus(403);
  }

  if (isCompletedWith) {
    var paired = User.find({'profile.username': isCompletedWith.toLowerCase()})
      .limit(1);

    paired.exec(function (err, pairedWithFromMongo) {
      if (err) {
        return next(err);
      } else {
        var index = req.user.uncompletedChallenges.indexOf(challengeId);
        if (index > -1) {
          req.user.progressTimestamps.push(Date.now() || 0);
          req.user.uncompletedChallenges.splice(index, 1);
        }
        var pairedWith = pairedWithFromMongo.pop();

        req.user.completedChallenges.push({
          _id: challengeId,
          name: req.body.challengeInfo.challengeName,
          completedWith: pairedWith._id,
          completedDate: isCompletedDate,
          solution: solutionLink,
          githubLink: githubLink,
          challengeType: challengeType,
          verified: false
        });

        req.user.save(function (err, user) {
          if (err) {
            return next(err);
          }

          if (req.user._id.toString() === pairedWith._id.toString()) {
            return res.sendStatus(200);
          }
          index = pairedWith.uncompletedChallenges.indexOf(challengeId);
          if (index > -1) {
            pairedWith.progressTimestamps.push(Date.now() || 0);
            pairedWith.uncompletedChallenges.splice(index, 1);

          }

          pairedWith.completedChallenges.push({
            _id: challengeId,
            name: req.body.challengeInfo.coursewareName,
            completedWith: req.user._id,
            completedDate: isCompletedDate,
            solution: solutionLink,
            githubLink: githubLink,
            challengeType: challengeType,
            verified: false
          });
          pairedWith.save(function (err, paired) {
            if (err) {
              return next(err);
            }
            if (user && paired) {
              return res.sendStatus(200);
            }
          });
        });
      }
    });
  } else {

    req.user.completedChallenges.push({
      _id: challengeId,
      name: req.body.challengeInfo.challengeName,
      completedWith: null,
      completedDate: isCompletedDate,
      solution: solutionLink,
      githubLink: githubLink,
      challengeType: challengeType,
      verified: false
    });

    var index = req.user.uncompletedChallenges.indexOf(challengeId);
    if (index > -1) {
      req.user.progressTimestamps.push(Date.now() || 0);
      req.user.uncompletedChallenges.splice(index, 1);
    }

    req.user.save(function (err, user) {
      if (err) {
        return next(err);
      }
      // NOTE(berks): under certain conditions this will not close the response.
      if (user) {
        return res.sendStatus(200);
      }
    });
  }
};
