import _ from 'lodash';
import moment from 'moment';
import loopback from 'loopback';
import path from 'path';
import dedent from 'dedent';
import { Observable } from 'rx';
import debug from 'debug';

import {
  ifNoUser401,
  ifNoUserSend
} from '../utils/middleware';

import { observeQuery } from '../utils/rx';

import {
  frontEndChallengeId,
  dataVisChallengeId,
  backEndChallengeId
} from '../utils/constantStrings.json';

import {
  completeCommitment$
} from '../utils/commit';

import certTypes from '../utils/certTypes.json';

const log = debug('fcc:certification');
const renderCertifedEmail = loopback.template(path.join(
  __dirname,
  '..',
  'views',
  'emails',
  'certified.ejs'
));
const renderNotifyEmail = loopback.template(path.join(
  __dirname,
  '..',
  'views',
  'emails',
  'a-new-user.ejs'
));
const sendMessageToNonUser = ifNoUserSend(
  'must be logged in to complete.'
);

function isCertified(ids, challengeMap = {}) {
  return _.every(ids, ({ id }) => challengeMap[id]);
}

function getIdsForCert$(id, Challenge) {
  return observeQuery(
    Challenge,
    'findById',
    id,
    {
      id: true,
      tests: true,
      name: true,
      challengeType: true
    }
  )
    .shareReplay();
}

// getFormatedDate(challengeMap: Object, challengeId: String) => String, throws
function getFormatedDate(challengeMap, challengeId) {
  return moment(challengeMap[challengeId].completedDate)
    .format('MMMM D, YYYY');
}

// sendCertifiedEmail(
//   {
//     email: String,
//     username: String,
//     isFrontEndCert: Boolean,
//     isBackEndCert: Boolean,
//     isDataVisCert: Boolean
//   },
//   send$: Observable
// ) => Observable
function sendCertifiedEmail(
  {
    email,
    name,
    username,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    challengeMap
  },
  send$
) {
  if (
    !isFrontEndCert ||
    !isBackEndCert ||
    !isDataVisCert
  ) {
    return Observable.just(false);
  }
  let frontEndDate;
  let backEndDate;
  let dataVisDate;
  try {
    frontEndDate = getFormatedDate(challengeMap, frontEndChallengeId);
    backEndDate = getFormatedDate(challengeMap, backEndChallengeId);
    dataVisDate = getFormatedDate(challengeMap, dataVisChallengeId);
  } catch (err) {
    return Observable.throw(err);
  }

  const notifyTeam = {
    type: 'email',
    to: 'Michael@FreeCodeCamp.com',
    from: 'Team@FreeCodeCamp.com',
    subject: 'A new user has arrived!',
    text: renderNotifyEmail({
      username,
      name,
      frontEndDate,
      dataVisDate,
      backEndDate
    })
  };
  const notifyUser = {
    type: 'email',
    to: email,
    from: 'Michael@FreeCodeCamp.com',
    subject: 'Congratulation on gaining your third certification!',
    text: renderCertifedEmail({
      username,
      name
    })
  };
  return Observable.combineLatest(
    send$(notifyTeam),
    send$(notifyUser),
    () => true
  );
}

export default function certificate(app) {
  const router = app.loopback.Router();
  const { Email, Challenge } = app.models;

  const certTypeIds = {
    [certTypes.frontEnd]: getIdsForCert$(frontEndChallengeId, Challenge),
    [certTypes.dataVis]: getIdsForCert$(dataVisChallengeId, Challenge),
    [certTypes.backEnd]: getIdsForCert$(backEndChallengeId, Challenge)
  };

  router.post(
    '/certificate/verify/front-end',
    ifNoUser401,
    verifyCert.bind(null, certTypes.frontEnd)
  );

  router.post(
    '/certificate/verify/back-end',
    ifNoUser401,
    verifyCert.bind(null, certTypes.backEnd)
  );

  router.post(
    '/certificate/verify/data-visualization',
    ifNoUser401,
    verifyCert.bind(null, certTypes.dataVis)
  );

  router.post(
    '/certificate/honest',
    sendMessageToNonUser,
    postHonest
  );

  app.use(router);

  function verifyCert(certType, req, res, next) {
    const { user } = req;
    return user.getChallengeMap$()
      .flatMap(() => certTypeIds[certType])
      .flatMap(challenge => {
        const {
          id,
          tests,
          name,
          challengeType
        } = challenge;
        if (
          user[certType] ||
          !isCertified(tests, user.challengeMap)
        ) {
          return Observable.just(false);
        }
        const updateData = {
          $set: {
            [`challengeMap.${id}`]: {
              id,
              name,
              completedDate: new Date(),
              challengeType
            },
            [certType]: true
          }
        };
        // set here so sendCertifiedEmail works properly
        // not used otherwise
        user[certType] = true;
        user.challengeMap[id] = { completedDate: new Date() };
        return Observable.combineLatest(
          // update user data
          user.update$(updateData),
          // If user has committed to nonprofit,
          // this will complete their pledge
          completeCommitment$(user),
          // sends notification email is user has all three certs
          // if not it noop
          sendCertifiedEmail(user, Email.send$),
          ({ count }, pledgeOrMessage) => ({ count, pledgeOrMessage })
        )
          .map(
            ({ count, pledgeOrMessage }) => {
              if (typeof pledgeOrMessage === 'string') {
                log(pledgeOrMessage);
              }
              log(`${count} documents updated`);
              return true;
            }
          );
      })
      .subscribe(
        (didCertify) => {
          if (didCertify) {
            return res.status(200).send(true);
          }
          return res.status(200).send(
            dedent`
              Looks like you have not completed the neccessary steps.
              Please return to the challenge map.
            `
          );
        },
        next
      );
  }

  function postHonest(req, res, next) {
    return req.user.update$({ $set: { isHonest: true } }).subscribe(
      () => res.status(200).send(true),
      next
    );
  }
}
