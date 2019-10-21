/* global PAYPAL_SUPPORTERS */
import { createAction, handleActions } from 'redux-actions';
import { uniqBy } from 'lodash';
import store from 'store';

import { createTypes, createAsyncTypes } from '../utils/createTypes';
import { createFetchUserSaga } from './fetch-user-saga';
import { createAcceptTermsSaga } from './accept-terms-saga';
import { createAppMountSaga } from './app-mount-saga';
import { createReportUserSaga } from './report-user-saga';
import { createShowCertSaga } from './show-cert-saga';
import { createNightModeSaga } from './night-mode-saga';

import hardGoToEpic from './hard-go-to-epic';
import failedUpdatesEpic from './failed-updates-epic';
import updateCompleteEpic from './update-complete-epic';

import { types as settingsTypes } from './settings';
import { types as challengeTypes } from '../templates/Challenges/redux/';
// eslint-disable-next-line max-len
import { CURRENT_CHALLENGE_KEY } from '../templates/Challenges/redux/current-challenge-saga';

export const ns = 'app';

export const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

const initialState = {
  appUsername: '',
  completionCount: 0,
  currentChallengeId: store.get(CURRENT_CHALLENGE_KEY),
  donationRequested: false,
  showCert: {},
  showCertFetchState: {
    ...defaultFetchState
  },
  user: {},
  userFetchState: {
    ...defaultFetchState
  },
  userProfileFetchState: {
    ...defaultFetchState
  },
  sessionMeta: { activeDonations: 0 },
  showDonationModal: false,
  isOnline: true
};

export const types = createTypes(
  [
    'appMount',
    'closeDonationModal',
    'donationRequested',
    'hardGoTo',
    'openDonationModal',
    'onlineStatusChange',
    'resetUserData',
    'submitComplete',
    'updateComplete',
    'updateCurrentChallengeId',
    'updateFailed',
    ...createAsyncTypes('fetchUser'),
    ...createAsyncTypes('fetchProfileForUser'),
    ...createAsyncTypes('acceptTerms'),
    ...createAsyncTypes('showCert'),
    ...createAsyncTypes('reportUser')
  ],
  ns
);

export const epics = [hardGoToEpic, failedUpdatesEpic, updateCompleteEpic];

export const sagas = [
  ...createAcceptTermsSaga(types),
  ...createAppMountSaga(types),
  ...createFetchUserSaga(types),
  ...createShowCertSaga(types),
  ...createReportUserSaga(types),
  ...createNightModeSaga({ ...types, ...settingsTypes })
];

export const appMount = createAction(types.appMount);

export const closeDonationModal = createAction(types.closeDonationModal);
export const openDonationModal = createAction(types.openDonationModal);
export const donationRequested = createAction(types.donationRequested);

export const onlineStatusChange = createAction(types.onlineStatusChange);

// `hardGoTo` is used to hit the API server directly
// without going through /internal
// used for things like /signin and /signout
export const hardGoTo = createAction(types.hardGoTo);

export const submitComplete = createAction(types.submitComplete);
export const updateComplete = createAction(types.updateComplete);
export const updateFailed = createAction(types.updateFailed);

export const acceptTerms = createAction(types.acceptTerms);
export const acceptTermsComplete = createAction(types.acceptTermsComplete);
export const acceptTermsError = createAction(types.acceptTermsError);

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fetchUserError = createAction(types.fetchUserError);

export const fetchProfileForUser = createAction(types.fetchProfileForUser);
export const fetchProfileForUserComplete = createAction(
  types.fetchProfileForUserComplete
);
export const fetchProfileForUserError = createAction(
  types.fetchProfileForUserError
);

export const reportUser = createAction(types.reportUser);
export const reportUserComplete = createAction(types.reportUserComplete);
export const reportUserError = createAction(types.reportUserError);

export const resetUserData = createAction(types.resetUserData);

export const showCert = createAction(types.showCert);
export const showCertComplete = createAction(types.showCertComplete);
export const showCertError = createAction(types.showCertError);

export const updateCurrentChallengeId = createAction(
  types.updateCurrentChallengeId
);

export const completedChallengesSelector = state =>
  userSelector(state).completedChallenges || [];
export const completionCountSelector = state => state[ns].completionCount;
export const currentChallengeIdSelector = state => state[ns].currentChallengeId;
export const donationRequestedSelector = state => state[ns].donationRequested;

export const isOnlineSelector = state => state[ns].isOnline;
export const isSignedInSelector = state => !!state[ns].appUsername;
export const isDonationModalOpenSelector = state => state[ns].showDonationModal;

export const signInLoadingSelector = state =>
  userFetchStateSelector(state).pending;
export const showCertSelector = state => state[ns].showCert;
export const showCertFetchStateSelector = state => state[ns].showCertFetchState;

export const showDonationSelector = state => {
  const completedChallenges = completedChallengesSelector(state);
  const completionCount = completionCountSelector(state);
  const currentCompletedLength = completedChallenges.length;
  const donationRequested = donationRequestedSelector(state);
  // the user has not completed 9 challenges in total yet
  if (currentCompletedLength < 9) {
    return false;
  }
  // this will mean we are on the 10th submission in total for the user
  if (completedChallenges.length === 9 && donationRequested === false) {
    return true;
  }
  // this will mean we are on the 3rd submission for this browser session
  if (completionCount === 2 && donationRequested === false) {
    return true;
  }
  return false;
};
export const userByNameSelector = username => state => {
  const { user } = state[ns];
  return username in user ? user[username] : {};
};
export const userFetchStateSelector = state => state[ns].userFetchState;
export const userProfileFetchStateSelector = state =>
  state[ns].userProfileFetchState;
export const usernameSelector = state => state[ns].appUsername;
export const userSelector = state => {
  const username = usernameSelector(state);

  return state[ns].user[username] || {};
};

export const sessionMetaSelector = state => state[ns].sessionMeta;
export const activeDonationsSelector = state => {
  const donors =
    Number(sessionMetaSelector(state).activeDonations) +
    Number(PAYPAL_SUPPORTERS || 0) -
    // Note 1:
    // Offset the no of inactive donations, that are not yet normalized in db
    // TODO: This data needs to be fetched and updated in db from Stripe
    2500;
  // Note 2:
  // Due to the offset above, non-prod data needs to be adjusted for -ve values
  return donors > 0
    ? donors
    : Number(sessionMetaSelector(state).activeDonations);
};

function spreadThePayloadOnUser(state, payload) {
  return {
    ...state,
    user: {
      ...state.user,
      [state.appUsername]: {
        ...state.user[state.appUsername],
        ...payload
      }
    }
  };
}

export const reducer = handleActions(
  {
    [types.fetchUser]: state => ({
      ...state,
      userFetchState: { ...defaultFetchState }
    }),
    [types.fetchProfileForUser]: state => ({
      ...state,
      userProfileFetchState: { ...defaultFetchState }
    }),
    [types.fetchUserComplete]: (
      state,
      { payload: { user, username, sessionMeta } }
    ) => ({
      ...state,
      user: {
        ...state.user,
        [username]: { ...user, sessionUser: true }
      },
      appUsername: username,
      currentChallengeId: user.currentChallengeId,
      userFetchState: {
        pending: false,
        complete: true,
        errored: false,
        error: null
      },
      sessionMeta: {
        ...state.sessionMeta,
        ...sessionMeta
      }
    }),
    [types.fetchUserError]: (state, { payload }) => ({
      ...state,
      userFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [types.fetchProfileForUserComplete]: (
      state,
      { payload: { user, username } }
    ) => {
      const previousUserObject =
        username in state.user ? state.user[username] : {};
      return {
        ...state,
        user: {
          ...state.user,
          [username]: { ...previousUserObject, ...user }
        },
        userProfileFetchState: {
          ...defaultFetchState,
          pending: false,
          complete: true
        }
      };
    },
    [types.fetchProfileForUserError]: (state, { payload }) => ({
      ...state,
      userProfileFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [types.onlineStatusChange]: (state, { payload: isOnline }) => ({
      ...state,
      isOnline
    }),
    [types.closeDonationModal]: state => ({
      ...state,
      showDonationModal: false
    }),
    [types.openDonationModal]: state => ({
      ...state,
      showDonationModal: true
    }),
    [types.donationRequested]: state => ({
      ...state,
      donationRequested: true
    }),
    [types.resetUserData]: state => ({
      ...state,
      appUsername: '',
      user: {}
    }),
    [types.showCert]: state => ({
      ...state,
      showCert: {},
      showCertFetchState: { ...defaultFetchState }
    }),
    [types.showCertComplete]: (state, { payload }) => ({
      ...state,
      showCert: payload,
      showCertFetchState: {
        ...defaultFetchState,
        pending: false,
        complete: true
      }
    }),
    [types.showCertError]: (state, { payload }) => ({
      ...state,
      showCert: {},
      showCertFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [types.submitComplete]: (state, { payload: { id, challArray } }) => {
      // TODO: possibly more of the payload (files?) should be added
      // to the completedChallenges array.
      let submittedchallenges = [{ id, completedDate: Date.now() }];
      if (challArray) {
        submittedchallenges = challArray;
      }
      const { appUsername } = state;
      return {
        ...state,
        completionCount: state.completionCount + 1,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            completedChallenges: uniqBy(
              [
                ...submittedchallenges,
                ...state.user[appUsername].completedChallenges
              ],
              'id'
            )
          }
        }
      };
    },
    [challengeTypes.challengeMounted]: (state, { payload }) => ({
      ...state,
      currentChallengeId: payload
    }),
    [settingsTypes.updateLegacyCertComplete]: (state, { payload }) => {
      const { appUsername } = state;
      return {
        ...state,
        completionCount: state.completionCount + 1,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            completedChallenges: uniqBy(
              [...state.user[appUsername].completedChallenges, payload],
              'id'
            )
          }
        }
      };
    },
    [settingsTypes.submitNewUsernameComplete]: (state, { payload }) =>
      payload
        ? {
            ...state,
            user: {
              ...state.user,
              [state.appUsername]: {
                ...state.user[state.appUsername],
                username: payload
              }
            }
          }
        : state,
    [settingsTypes.submitNewAboutComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyEmailComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateUserFlagComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.verifyCertComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.submitProfileUIComplete]: (state, { payload }) =>
      payload
        ? {
            ...state,
            user: {
              ...state.user,
              [state.appUsername]: {
                ...state.user[state.appUsername],
                profileUI: { ...payload }
              }
            }
          }
        : state
  },
  initialState
);
