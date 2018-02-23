import { ofType } from 'redux-epic';
import debug from 'debug';

import {
  types as appTypes,
  createErrorObservable
} from '../../redux';
import { types, fetchMapUiComplete } from './';
import { langSelector } from '../../Router/redux';
import { shapeChallenges } from '../../redux/utils';

const isDev = debug.enabled('fcc:*');

export default function fetchMapUiEpic(
  actions,
  { getState },
  { services }
) {
  return actions::ofType(
    appTypes.appMounted
  )
    .flatMapLatest(() => {
      const lang = langSelector(getState());
      const options = {
        params: { lang },
        service: 'map-ui'
      };
      return services.readService$(options)
        .retry(3)
        .map(({ entities, ...res }) => ({
          entities: shapeChallenges(
            entities,
            isDev
          ),
          ...res
        }))
        .map(({ entities, result } = {}) => {
          return fetchMapUiComplete(
            entities,
            result
          );
        })
        .startWith({ type: types.fetchMapUi.start })
        .catch(createErrorObservable);
    });
  }
