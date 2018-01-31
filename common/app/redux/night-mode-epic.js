import _ from 'lodash';
import { Observable } from 'rx';
import { ofType } from 'redux-epic';
import store from 'store';

import { themes } from '../../utils/themes.js';
import { postJSON$ } from '../../utils/ajax-stream.js';
import {
  types,

  postThemeComplete,
  createErrorObservable,

  themeSelector,
  usernameSelector,
  csrfSelector
} from './index.js';

function persistTheme(theme) {
  store.set('fcc-theme', theme);
}

export default function nightModeEpic(
  actions,
  { getState },
  { document }
) {
  return Observable.of(document)
    // if document is undefined we do nothing (ssr trap)
    .filter(Boolean)
    .flatMap(({ body }) => {
      const toggleBodyClass = actions
        ::ofType(
          types.fetchUser.complete,
          types.toggleNightMode,
          types.postThemeComplete
        )
        .map(_.flow(getState, themeSelector))
        // catch existing night mode users
        .do(persistTheme)
        .do(theme => {
          if (theme === themes.night) {
            body.classList.add(themes.night);
          } else {
            body.classList.remove(themes.night);
          }
        })
        .ignoreElements();

      const postThemeEpic = actions::ofType(types.toggleNightMode)
        .debounce(250)
        .flatMapLatest(() => {
          const _csrf = csrfSelector(getState());
          const theme = themeSelector(getState());
          const username = usernameSelector(getState());
          return postJSON$('/update-my-theme', { _csrf, theme })
            .pluck('updatedTo')
            .map(theme => postThemeComplete(username, theme))
            .catch(createErrorObservable);
        });

      return Observable.merge(toggleBodyClass, postThemeEpic);
    });
}
