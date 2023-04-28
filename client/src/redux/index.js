import { uniqBy } from 'lodash-es';
import { handleActions } from 'redux-actions';
import store from 'store';

import {
  actionTypes as challengeTypes,
  CURRENT_CHALLENGE_KEY
} from '../templates/Challenges/redux/action-types';
import { createAcceptTermsSaga } from './accept-terms-saga';
import { actionTypes, ns as MainApp } from './action-types';
import { createAppMountSaga } from './app-mount-saga';
import { createCodeAllySaga } from './codeally-saga';
import { createDonationSaga } from './donation-saga';
import failedUpdatesEpic from './failed-updates-epic';
import { createFetchUserSaga } from './fetch-user-saga';
import { createGaSaga } from './ga-saga';
import hardGoToEpic from './hard-go-to-epic';
import { createReportUserSaga } from './report-user-saga';
import { createSaveChallengeSaga } from './save-challenge-saga';
import { savedChallengesSelector } from './selectors';
import { actionTypes as settingsTypes } from './settings/action-types';
import { createShowCertSaga } from './show-cert-saga';
import updateCompleteEpic from './update-complete-epic';
import { createUserTokenSaga } from './user-token-saga';

const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

export const defaultDonationFormState = {
  redirecting: false,
  processing: false,
  success: false,
  error: '',
  loading: {
    stripe: true,
    paypal: true
  }
};

const initialState = {
  appUsername: '',
  recentlyClaimedBlock: null,
  canRequestProgressDonation: true,
  completionCount: 0,
  currentChallengeId: store.get(CURRENT_CHALLENGE_KEY),
  showCert: {},
  showCertFetchState: {
    ...defaultFetchState
  },
  showCodeAlly: false,
  user: {},
  userFetchState: {
    ...defaultFetchState
  },
  allChallengesInfo: {
    challengeEdges: [],
    certificateNodes: []
  },
  userProfileFetchState: {
    ...defaultFetchState
  },
  sessionMeta: { activeDonations: 0 },
  showDonationModal: false,
  showSignoutModal: false,
  isOnline: true,
  isServerOnline: true,
  renderStartTime: null,
  donationFormState: {
    ...defaultDonationFormState
  }
};

export const epics = [hardGoToEpic, failedUpdatesEpic, updateCompleteEpic];

export const sagas = [
  ...createAcceptTermsSaga(actionTypes),
  ...createAppMountSaga(actionTypes),
  ...createCodeAllySaga(actionTypes),
  ...createDonationSaga(actionTypes),
  ...createGaSaga(actionTypes),
  ...createFetchUserSaga(actionTypes),
  ...createShowCertSaga(actionTypes),
  ...createReportUserSaga(actionTypes),
  ...createUserTokenSaga(actionTypes),
  ...createSaveChallengeSaga(actionTypes)
];

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
    [actionTypes.acceptTermsComplete]: (state, { payload }) => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            // TODO: the user accepts the privacy terms in practice during auth
            // however, it's currently being used to track if they've accepted
            // or rejected the newsletter. Ideally this should be migrated,
            // since they can't sign up without accepting the terms.
            acceptedPrivacyTerms: true,
            sendQuincyEmail:
              payload === null
                ? state.user[appUsername].sendQuincyEmail
                : payload
          }
        }
      };
    },
    [actionTypes.allowBlockDonationRequests]: (state, { payload }) => {
      return {
        ...state,
        recentlyClaimedBlock: payload
      };
    },
    [actionTypes.setRenderStartTime]: (state, { payload }) => {
      return {
        ...state,
        renderStartTime: payload
      };
    },
    [actionTypes.updateDonationFormState]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...state.donationFormState, ...payload }
    }),
    [actionTypes.postChargeProcessing]: state => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, processing: true }
    }),
    [actionTypes.postChargeComplete]: state => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            isDonating: true
          }
        },

        donationFormState: { ...defaultDonationFormState, success: true }
      };
    },
    [actionTypes.postChargeError]: (state, { payload }) => ({
      ...state,
      donationFormState: { ...defaultDonationFormState, error: payload }
    }),
    [actionTypes.updateAllChallengesInfo]: (state, { payload }) => ({
      ...state,
      allChallengesInfo: { ...payload }
    }),
    [actionTypes.fetchUser]: state => ({
      ...state,
      userFetchState: { ...defaultFetchState }
    }),
    [actionTypes.fetchProfileForUser]: state => ({
      ...state,
      userProfileFetchState: { ...defaultFetchState }
    }),
    [actionTypes.fetchUserComplete]: (
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
    [actionTypes.fetchUserError]: (state, { payload }) => ({
      ...state,
      userFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [actionTypes.fetchProfileForUserComplete]: (
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
    [actionTypes.fetchProfileForUserError]: (state, { payload }) => ({
      ...state,
      userProfileFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [actionTypes.onlineStatusChange]: (state, { payload: isOnline }) => ({
      ...state,
      isOnline
    }),
    [actionTypes.serverStatusChange]: (state, { payload: isServerOnline }) => ({
      ...state,
      isServerOnline
    }),
    [actionTypes.closeDonationModal]: state => ({
      ...state,
      showDonationModal: false
    }),
    [actionTypes.openDonationModal]: state => ({
      ...state,
      showDonationModal: true
    }),
    [actionTypes.preventBlockDonationRequests]: state => ({
      ...state,
      recentlyClaimedBlock: null
    }),
    [actionTypes.preventProgressDonationRequests]: state => ({
      ...state,
      canRequestProgressDonation: false
    }),
    [actionTypes.resetUserData]: state => ({
      ...state,
      appUsername: '',
      user: {}
    }),
    [actionTypes.openSignoutModal]: state => ({
      ...state,
      showSignoutModal: true
    }),
    [actionTypes.closeSignoutModal]: state => ({
      ...state,
      showSignoutModal: false
    }),
    [actionTypes.showCert]: state => ({
      ...state,
      showCert: {},
      showCertFetchState: { ...defaultFetchState }
    }),
    [actionTypes.showCertComplete]: (state, { payload }) => ({
      ...state,
      showCert: payload,
      showCertFetchState: {
        ...defaultFetchState,
        pending: false,
        complete: true
      }
    }),
    [actionTypes.showCertError]: (state, { payload }) => ({
      ...state,
      showCert: {},
      showCertFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [actionTypes.submitComplete]: (state, { payload }) => {
      const { submittedChallenge, savedChallenges } = payload;
      let submittedchallenges = [
        { ...submittedChallenge, completedDate: Date.now() }
      ];
      if (submittedChallenge.challArray) {
        submittedchallenges = submittedChallenge.challArray;
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
            ),
            savedChallenges:
              savedChallenges ?? savedChallengesSelector(state[MainApp])
          }
        }
      };
    },
    [actionTypes.updateUserToken]: (state, { payload }) => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            userToken: payload
          }
        }
      };
    },
    [actionTypes.deleteUserTokenComplete]: state => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            userToken: null
          }
        }
      };
    },
    [actionTypes.hideCodeAlly]: state => {
      return {
        ...state,
        showCodeAlly: false
      };
    },
    [actionTypes.showCodeAlly]: state => {
      return {
        ...state,
        showCodeAlly: true
      };
    },
    [challengeTypes.challengeMounted]: (state, { payload }) => ({
      ...state,
      currentChallengeId: payload
    }),
    [actionTypes.saveChallengeComplete]: (state, { payload }) => {
      const { appUsername } = state;
      return {
        ...state,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            savedChallenges: payload
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
    [settingsTypes.updateMySocialsComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMySoundComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyThemeComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyKeyboardShortcutsComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyHonestyComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyQuincyEmailComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyPortfolioComplete]: (state, { payload }) =>
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
