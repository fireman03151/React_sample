import { Observable } from 'rx';
import { ofType } from 'redux-epic';
import debug from 'debug';

import {
  types,
  createErrorObservable,

  challengeSelector,
  csrfSelector,
  userSelector
} from './';
import { updateUserCurrentChallenge } from '../entities';
import { postJSON$ } from '../../utils/ajax-stream';
import { types as challenges } from '../routes/Challenges/redux';

const log = debug('fcc:app:redux:up-my-challenge-epic');
export default function updateMyCurrentChallengeEpic(actions, { getState }) {
  const updateChallenge = actions::ofType(types.appMounted)
    .flatMapLatest(() => actions::ofType(challenges.onRouteChallenges))
    .map(() => {
      const state = getState();
      // username is never defined SSR
      const { username } = userSelector(state);
      const { id } = challengeSelector(state);
      const csrf = csrfSelector(state);
      return {
        username,
        csrf,
        currentChallengeId: id
      };
    })
    .filter(({ username }) => !!username)
    .distinctUntilChanged(x => x.currentChallengeId);
  const optimistic = updateChallenge.map(updateUserCurrentChallenge);
  const ajaxUpdate = updateChallenge
    .debounce(250)
    .flatMapLatest(({ csrf, currentChallengeId }) => {
      return postJSON$(
        '/update-my-current-challenge',
        {
          currentChallengeId,
          _csrf: csrf
        }
      )
        .map(({ message }) => log(message))
        .ignoreElements()
        .catch(createErrorObservable);
    });
  return Observable.merge(optimistic, ajaxUpdate);
}
