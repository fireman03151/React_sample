import _ from 'lodash';
import dedent from 'dedent';
import moment from 'moment';
import { Observable, Scheduler } from 'rx';
import assign from 'object.assign';
import debugFactory from 'debug';
import utils from '../utils';

import {
  saveUser,
  observeMethod,
  observableQueryFromModel
} from '../utils/rx';

import {
  userMigration,
  ifNoUserRedirectTo,
  ifNoUserSend
} from '../utils/middleware';

const debug = debugFactory('freecc:challenges');
const challengesRegex = /^(bonfire|waypoint|zipline|basejump)/i;
const firstChallenge = 'waypoint-say-hello-to-html-elements';
const challengeView = {
  0: 'coursewares/showHTML',
  1: 'coursewares/showJS',
  2: 'coursewares/showVideo',
  3: 'coursewares/showZiplineOrBasejump',
  4: 'coursewares/showZiplineOrBasejump',
  5: 'coursewares/showBonfire'
};

const dasherize = utils.dasherize;
const unDasherize = utils.unDasherize;
const getMDNLinks = utils.getMDNLinks;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateUserProgress(user, challengeId, completedChallenge) {
  const alreadyCompleted = user.completedChallenges.some(({ id }) => {
    return id === challengeId;
  });

  if (!alreadyCompleted) {
    user.progressTimestamps.push({
      timestamp: Date.now(),
      completedChallenge
    });
  }
  user.completedChallenges.push(completedChallenge);
  return user;
}

module.exports = function(app) {
  const router = app.loopback.Router();

  const challengesQuery = {
    order: [
      'order ASC',
      'suborder ASC'
    ]
  };

  // challenge model
  const Challenge = app.models.Challenge;
  // challenge find query stream
  const findChallenge$ = observeMethod(Challenge, 'find');
  // create a stream of all the challenges
  const challenge$ = findChallenge$(challengesQuery)
    .doOnNext(() => debug('query challenges'))
    .flatMap(challenges => Observable.from(
      challenges,
      null,
      null,
      Scheduler.default
    ))
    .shareReplay();

  // create a stream of challenge blocks
  const blocks$ = challenge$
    .map(challenge => challenge.toJSON())
    // group challenges by block | returns a stream of observables
    .groupBy(challenge => challenge.block)
    // turn block group stream into an array
    .flatMap(block$ => block$.toArray())
    // turn array into stream of object
    .map(blockArray => ({
      name: blockArray[0].block,
      dashedName: dasherize(blockArray[0].block),
      challenges: blockArray
    }))
    .filter(({ name })=> {
      return name !== 'Hikes';
    })
    .shareReplay();

  const User = app.models.User;
  const userCount$ = observeMethod(User, 'count');

  const send200toNonUser = ifNoUserSend(true);
  const redirectNonUser = ifNoUserRedirectTo(
    '/challenges/learn-how-free-code-camp-works'
  );

  router.post(
    '/completed-challenge/',
    send200toNonUser,
    completedChallenge
  );
  router.post(
    '/completed-zipline-or-basejump',
    send200toNonUser,
    completedZiplineOrBasejump
  );
  router.post(
    '/completed-bonfire',
    send200toNonUser,
    completedBonfire
  );

  // the follow routes are covered by userMigration
  router.use(userMigration);
  router.get('/map', challengeMap);
  router.get(
    '/challenges/next-challenge',
    redirectNonUser,
    returnNextChallenge
  );

  router.get('/challenges/:challengeName', returnIndividualChallenge);

  router.get(
    '/challenges/',
    redirectNonUser,
    returnCurrentChallenge
  );

  app.use(router);

  function returnNextChallenge(req, res, next) {
    let nextChallengeName = firstChallenge;

    const challengeId = req.user.currentChallenge ?
      req.user.currentChallenge.challengeId :
      'bd7123c8c441eddfaeb5bdef';

    // find challenge
    return challenge$
      .map(challenge => challenge.toJSON())
      .filter(({ block }) => block !== 'Hikes')
      .filter(({ id }) => id === challengeId)
      // now lets find the block it belongs to
      .flatMap(challenge => {
        // find the index of the block this challenge resides in
        const blockIndex$ = blocks$
          .findIndex(({ name }) => name === challenge.block);

        return blockIndex$
          .flatMap(blockIndex => {
            // could not find block?
            if (blockIndex === -1) {
              return Observable.throw(
                'could not find challenge block for ' + challenge.block
              );
            }
            const nextBlock$ = blocks$.elementAt(blockIndex + 1);
            const firstChallengeOfNextBlock$ = nextBlock$
              .map(block => block.challenges[0]);

            return blocks$
              .elementAt(blockIndex)
              .flatMap(block => {
                // find where our challenge lies in the block
                const challengeIndex$ = Observable.from(
                  block.challenges,
                  null,
                  null,
                  Scheduler.default
                )
                  .findIndex(({ id }) => id === challengeId);

                // grab next challenge in this block
                return challengeIndex$
                  .map(index => {
                    return block.challenges[index + 1];
                  })
                  .flatMap(nextChallenge => {
                    if (!nextChallenge) {
                      return firstChallengeOfNextBlock$;
                    }
                    return Observable.just(nextChallenge);
                  });
              });
          });
      })
      .map(nextChallenge => {
        nextChallengeName = nextChallenge.dashedName;
        return nextChallengeName;
      })
      .flatMap(() => {
        return saveUser(req.user);
      })
      .subscribe(
        function() {},
        next,
        function() {
          debug('next challengeName', nextChallengeName);
          if (!nextChallengeName || nextChallengeName === firstChallenge) {
            req.flash('errors', {
              msg: dedent`
                Once you have completed all of our challenges, you should
                join our <a href=\"//gitter.im/freecodecamp/HalfWayClub\"
                target=\"_blank\">Half Way Club</a> and start getting
                ready for our nonprofit projects.
              `.split('\n').join(' ')
            });
            return res.redirect('/map');
          }
          res.redirect('/challenges/' + nextChallengeName);
        }
      );
  }

  function returnCurrentChallenge(req, res, next) {
    Observable.just(req.user)
      .flatMap(user => {
        if (!req.user.currentChallenge) {
          return challenge$
            .first()
            .flatMap(challenge => {
              user.currentChallenge = {
                challengeId: challenge.id,
                challengeName: challenge.name,
                dashedName: challenge.dashedName
              };
              return saveUser(user);
            });
        }
        return Observable.just(user);
      })
      .map(user => user.currentChallenge.dashedName)
      .subscribe(
        function(challengeName) {
          res.redirect('/challenges/' + challengeName);
        },
        next,
        function() {
        }
      );
  }

  function returnIndividualChallenge(req, res, next) {
    const origChallengeName = req.params.challengeName;
    const unDashedName = unDasherize(origChallengeName);

    const challengeName = challengesRegex.test(unDashedName) ?
      // remove first word if matches
      unDashedName.split(' ').slice(1).join(' ') :
      unDashedName;

    const testChallengeName = new RegExp(challengeName, 'i');
    debug('looking for %s', testChallengeName);
    challenge$
      .filter((challenge) => {
        return testChallengeName.test(challenge.name);
      })
      .lastOrDefault(null)
      .flatMap(challenge => {

        // Handle not found
        if (!challenge) {
          debug('did not find challenge for ' + origChallengeName);
          req.flash('errors', {
            msg:
              '404: We couldn\'t find a challenge with the name `' +
              origChallengeName +
              '` Please double check the name.'
          });
          return Observable.just('/challenges');
        }

        if (dasherize(challenge.name) !== origChallengeName) {
          return Observable.just('/challenges/' + dasherize(challenge.name));
        }

        if (challenge) {
          if (req.user) {
            req.user.currentChallenge = {
              challengeId: challenge.id,
              challengeName: challenge.name,
              dashedName: challenge.dashedName
            };
          }

          // save user does nothing if user does not exist
          return saveUser(req.user)
            .map(() => ({
              title: challenge.name,
              dashedName: origChallengeName,
              name: challenge.name,
              details: challenge.description,
              tests: challenge.tests,
              challengeSeed: challenge.challengeSeed,
              verb: utils.randomVerb(),
              phrase: utils.randomPhrase(),
              compliment: utils.randomCompliment(),
              challengeId: challenge.id,
              challengeType: challenge.challengeType,
              // video challenges
              video: challenge.challengeSeed[0],
              // bonfires specific
              difficulty: Math.floor(+challenge.difficulty),
              bonfires: challenge,
              MDNkeys: challenge.MDNlinks,
              MDNlinks: getMDNLinks(challenge.MDNlinks),
              // htmls specific
              environment: utils.whichEnvironment()
            }));
        }
      })
      .subscribe(
        function(data) {
          if (typeof data === 'string') {
            debug('redirecting to %s', data);
            return res.redirect(data);
          }
          var view = challengeView[data.challengeType];
          res.render(view, data);
        },
        next,
        function() {}
      );
  }

  function completedBonfire(req, res, next) {
    debug('compltedBonfire');
    var completedWith = req.body.challengeInfo.completedWith || false;
    var challengeId = req.body.challengeInfo.challengeId;

    var challengeData = {
      id: challengeId,
      name: req.body.challengeInfo.challengeName || '',
      completedDate: Math.round(+new Date()),
      solution: req.body.challengeInfo.solution,
      challengeType: 5
    };

    observableQueryFromModel(
        User,
        'findOne',
        { where: { username: ('' + completedWith).toLowerCase() } }
      )
      .doOnNext(function(pairedWith) {
        debug('paired with ', pairedWith);
        if (pairedWith) {
          updateUserProgress(
            pairedWith,
            challengeId,
            assign({ completedWith: req.user.id }, challengeData)
          );
        }
      })
      .withLatestFrom(
        Observable.just(req.user),
        function(pairedWith, user) {
          return {
            user: user,
            pairedWith: pairedWith
          };
        }
      )
      // side effects should always be done in do's and taps
      .doOnNext(function(dats) {
        updateUserProgress(
          dats.user,
          challengeId,
          dats.pairedWith ?
            // paired programmer found and adding to data
            assign({ completedWith: dats.pairedWith.id }, challengeData) :
            // user said they paired, but pair wasn't found
            challengeData
        );
      })
      // iterate users
      .flatMap(function(dats) {
        debug('flatmap');
        return Observable.from([dats.user, dats.pairedWith]);
      })
      // save user
      .flatMap(function(user) {
        // save user will do nothing if user is falsey
        return saveUser(user);
      })
      .subscribe(
        function(user) {
          debug('onNext');
          if (user) {
            debug('user %s saved', user.username);
          }
        },
        next,
        function() {
          debug('completed');
          return res.status(200).send(true);
        }
      );
  }

  function completedChallenge(req, res, next) {

    const completedDate = Math.round(+new Date());
    const { id, name } = req.body;
    const { challengeId, challengeName } = req.body.challengeInfo || {};

    updateUserProgress(
      req.user,
      id || challengeId,
      {
        id: id || challengeId,
        completedDate: completedDate,
        name: name || challengeName || '',
        solution: null,
        githubLink: null,
        verified: true
      }
    );

    saveUser(req.user)
      .subscribe(
        function(user) {
          debug(
            'user save points %s',
            user && user.progressTimestamps && user.progressTimestamps.length
          );
        },
        next,
        function() {
          res.sendStatus(200);
        }
      );
  }

  function completedZiplineOrBasejump(req, res, next) {

    var completedWith = req.body.challengeInfo.completedWith || '';
    var completedDate = Math.round(+new Date());
    var challengeId = req.body.challengeInfo.challengeId;
    var solutionLink = req.body.challengeInfo.publicURL;

    var githubLink = req.body.challengeInfo.challengeType === '4' ?
      req.body.challengeInfo.githubURL :
      true;

    var challengeType = req.body.challengeInfo.challengeType === '4' ?
      4 :
      3;

    if (!solutionLink || !githubLink) {
      req.flash('errors', {
        msg: 'You haven\'t supplied the necessary URLs for us to inspect ' +
        'your work.'
      });
      return res.sendStatus(403);
    }

    var challengeData = {
      id: challengeId,
      name: req.body.challengeInfo.challengeName || '',
      completedDate: completedDate,
      solution: solutionLink,
      githubLink: githubLink,
      challengeType: challengeType,
      verified: false
    };

    observableQueryFromModel(
        User,
        'findOne',
        { where: { username: completedWith.toLowerCase() } }
      )
      .doOnNext(function(pairedWith) {
        if (pairedWith) {
          updateUserProgress(
            pairedWith,
            challengeId,
            assign({ completedWith: req.user.id }, challengeData)
          );
        }
      })
      .withLatestFrom(Observable.just(req.user), function(pairedWith, user) {
        return {
          user: user,
          pairedWith: pairedWith
        };
      })
      .doOnNext(function({ user, pairedWith }) {
        updateUserProgress(
          user,
          challengeId,
          pairedWith ?
            assign({ completedWith: pairedWith.id }, challengeData) :
            challengeData
        );
      })
      .flatMap(function({ user, pairedWith }) {
        return Observable.from([user, pairedWith]);
      })
      // save users
      .flatMap(function(user) {
        // save user will do nothing if user is falsey
        return saveUser(user);
      })
      .subscribe(
        function(user) {
          if (user) {
            debug('user %s saved', user.username);
          }
        },
        next,
        function() {
          return res.status(200).send(true);
        }
      );
  }

  function challengeMap({ user = {} }, res, next) {
    const daysRunning = moment().diff(new Date('10/15/2014'), 'days');

    // if user
    // get the id's of all the users completed challenges
    const completedChallenges = !user.completedChallenges ?
      [] :
      _.uniq(user.completedChallenges).map(({ id, _id }) => id || _id);

    const camperCount$ = userCount$()
      .map(camperCount => numberWithCommas(camperCount));

    // create a stream of an array of all the challenge blocks
    const blocks$ = challenge$
      // mark challenge completed
      .map(challengeModel => {
        const challenge = challengeModel.toJSON();
        if (completedChallenges.indexOf(challenge.id) !== -1) {
          challenge.completed = true;
        }
        return challenge;
      })
      // group challenges by block | returns a stream of observables
      .groupBy(challenge => challenge.block)
      // turn block group stream into an array
      .flatMap(block$ => block$.toArray())
      .map(blockArray => {
        const completedCount = blockArray.reduce((sum, { completed }) => {
          if (completed) {
            return sum + 1;
          }
          return sum;
        }, 0);

        return {
          name: blockArray[0].block,
          dashedName: dasherize(blockArray[0].block),
          challenges: blockArray,
          completed: completedCount / blockArray.length * 100
        };
      })
      .filter(({ name }) => name !== 'Hikes')
      // turn stream of blocks into a stream of an array
      .toArray();

    Observable.combineLatest(
      camperCount$,
      blocks$,
      (camperCount, blocks) => ({ camperCount, blocks })
    )
      .subscribe(
        ({ camperCount, blocks }) => {
          res.render('challengeMap/show', {
            blocks,
            daysRunning,
            camperCount,
            title: "A map of all Free Code Camp's Challenges"
          });
        },
        next
      );
  }
};
