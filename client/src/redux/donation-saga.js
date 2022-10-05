import i18next from 'i18next';
import {
  call,
  delay,
  put,
  select,
  take,
  takeEvery,
  takeLeading
} from 'redux-saga/effects';

import {
  addDonation,
  postChargeStripe,
  postChargeStripeCard
} from '../utils/ajax';
import { actionTypes as appTypes } from './action-types';
import {
  addDonationComplete,
  addDonationError,
  openDonationModal,
  postChargeStripeCardComplete,
  postChargeStripeCardError,
  postChargeStripeComplete,
  postChargeStripeError,
  preventBlockDonationRequests,
  preventProgressDonationRequests
} from './actions';
import {
  isDonatingSelector,
  recentlyClaimedBlockSelector,
  shouldRequestDonationSelector
} from './selectors';

const defaultDonationErrorMessage = i18next.t('donate.error-2');

function* showDonateModalSaga() {
  let shouldRequestDonation = yield select(shouldRequestDonationSelector);
  if (shouldRequestDonation) {
    yield delay(200);
    const recentlyClaimedBlock = yield select(recentlyClaimedBlockSelector);
    yield put(openDonationModal());
    yield take(appTypes.closeDonationModal);
    if (recentlyClaimedBlock) {
      yield put(preventBlockDonationRequests());
    } else {
      yield put(preventProgressDonationRequests());
    }
  }
}

function* addDonationSaga({ payload }) {
  try {
    yield call(addDonation, payload);
    yield put(addDonationComplete());
    yield call(setDonationCookie);
  } catch (error) {
    const data =
      error.response && error.response.data
        ? error.response.data
        : {
            message: defaultDonationErrorMessage
          };
    yield put(addDonationError(data.message));
  }
}

function* postChargeStripeSaga({ payload }) {
  try {
    yield call(postChargeStripe, payload);
    yield put(postChargeStripeComplete());
    yield call(setDonationCookie);
  } catch (error) {
    const err =
      error.response && error.response.data
        ? error.response.data.error
        : defaultDonationErrorMessage;
    yield put(postChargeStripeError(err));
  }
}

function* stripeCardErrorHandler(
  error,
  handleAuthentication,
  clientSecret,
  paymentMethodId
) {
  if (error.type === 'UserActionRequired' && clientSecret) {
    yield handleAuthentication(clientSecret, paymentMethodId)
      .then(result => {
        if (result?.paymentIntent?.status !== 'succeeded')
          throw result.error || { type: 'StripeAuthorizationFailed' };
      })
      .catch(error => {
        throw error;
      });
  } else {
    throw error;
  }
}

function* postChargeStripeCardSaga({
  payload: { paymentMethodId, amount, duration, handleAuthentication }
}) {
  try {
    const optimizedPayload = { paymentMethodId, amount, duration };
    const {
      data: { error }
    } = yield call(postChargeStripeCard, optimizedPayload);
    if (error) {
      yield stripeCardErrorHandler(
        error,
        handleAuthentication,
        error.client_secret,
        paymentMethodId,
        optimizedPayload
      );
    }
    yield call(addDonation, optimizedPayload);
    yield put(postChargeStripeCardComplete());
    yield call(setDonationCookie);
  } catch (error) {
    const errorMessage = error.message || defaultDonationErrorMessage;
    yield put(postChargeStripeCardError(errorMessage));
  }
}

function* setDonationCookie() {
  const isDonating = yield select(isDonatingSelector);
  const isDonorCookieSet = document.cookie
    .split(';')
    .some(item => item.trim().startsWith('isDonor=true'));
  if (isDonating) {
    if (!isDonorCookieSet) {
      document.cookie = 'isDonor=true';
    }
  }
}

export function createDonationSaga(types) {
  return [
    takeEvery(types.tryToShowDonationModal, showDonateModalSaga),
    takeEvery(types.addDonation, addDonationSaga),
    takeLeading(types.postChargeStripe, postChargeStripeSaga),
    takeLeading(types.postChargeStripeCard, postChargeStripeCardSaga),
    takeEvery(types.fetchUserComplete, setDonationCookie)
  ];
}
