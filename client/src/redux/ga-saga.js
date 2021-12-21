/* eslint-disable camelcase */
import { takeEvery, call, all, select } from 'redux-saga/effects';
import { aBTestConfig } from '../../../config/donation-settings';
import ga from '../analytics';
import {
  emailSelector,
  completionCountSelector,
  completedChallengesSelector
} from '../redux';
import { emailToABVariant } from '../utils/A-B-tester';

const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };

function* callGaType({ payload: { type, data } }) {
  if (
    type === 'event' &&
    data.category.includes('Donation') &&
    aBTestConfig.isTesting
  ) {
    const email = yield select(emailSelector);
    if (email) {
      const completedChallengeTotal = yield select(completedChallengesSelector);
      const completedChallengeSession = yield select(completionCountSelector);
      const customDimensions = {
        // URL;
        dimension1: window.location.href,
        // Challenges_Completed_Session
        dimension2: completedChallengeSession,
        // Challenges_Completed_Total
        dimension3: completedChallengeTotal.length,
        // Test_Type
        dimension4: aBTestConfig.type,
        // Test_Variation
        dimension5: emailToABVariant(email).isAVariant ? 'A' : 'B'
      };
      ga.set(customDimensions);
    }
  }

  yield call(GaTypes[type], data);
}

export function* createGaSaga(types) {
  yield all([takeEvery(types.executeGA, callGaType)]);
}
