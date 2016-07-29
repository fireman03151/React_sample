import fetchUserSaga from './fetch-user-saga';

export { default as reducer } from './reducer';
export * as actions from './actions';
export { default as types } from './types';
export const sagas = [ fetchUserSaga ];
