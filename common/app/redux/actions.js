import { Observable } from 'rx';
import { createAction } from 'redux-actions';
import types from './types';

const throwIfUndefined = () => {
  throw new TypeError('Argument must not be of  type `undefined`');
};

export const createEventMeta = ({
  category = throwIfUndefined,
  action = throwIfUndefined,
  label,
  value
} = throwIfUndefined) => ({
  analytics: {
    type: 'event',
    category,
    action,
    label,
    value
  }
});

export const trackEvent = createAction(
  types.analytics,
  null,
  createEventMeta
);

export const trackSocial = createAction(
  types.analytics,
  null,
  (
    network = throwIfUndefined,
    action = throwIfUndefined,
    target = throwIfUndefined
  ) => ({
    analytics: {
      type: 'event',
      network,
      action,
      target
    }
  })
);
// updateTitle(title: String) => Action
export const updateTitle = createAction(types.updateTitle);

// fetchUser() => Action
// used in combination with fetch-user-saga
export const fetchUser = createAction(types.fetchUser);

// addUser(
//   entities: { [userId]: User }
// ) => Action
export const addUser = createAction(
  types.addUser,
  () => {},
  entities => ({ entities })
);
export const updateThisUser = createAction(types.updateThisUser);
export const showSignIn = createAction(types.showSignIn);
export const loadCurrentChallenge = createAction(
  types.loadCurrentChallenge,
  null,
  () => createEventMeta({
    category: 'Nav',
    action: 'clicked',
    label: 'fcc logo clicked'
  })
);
export const updateMyCurrentChallenge = createAction(
  types.updateMyCurrentChallenge,
  (username, currentChallengeId) => ({ username, currentChallengeId })
);

// updateUserPoints(username: String, points: Number) => Action
export const updateUserPoints = createAction(
  types.updateUserPoints,
  (username, points) => ({ username, points })
);
// updateUserFlag(username: String, flag: String) => Action
export const updateUserFlag = createAction(
  types.updateUserFlag,
  (username, flag) => ({ username, flag })
);
// updateUserEmail(username: String, email: String) => Action
export const updateUserEmail = createAction(
  types.updateUserFlag,
  (username, email) => ({ username, email })
);
// updateUserLang(username: String, lang: String) => Action
export const updateUserLang = createAction(
  types.updateUserLang,
  (username, lang) => ({ username, lang })
);

// updateUserChallenge(
//   username: String,
//   challengeInfo: Object
// ) => Action
export const updateUserChallenge = createAction(
  types.updateUserChallenge,
  (username, challengeInfo) => ({ username, challengeInfo })
);

export const updateAppLang = createAction(types.updateAppLang);

// used when server needs client to redirect
export const delayedRedirect = createAction(types.delayedRedirect);

// hardGoTo(path: String) => Action
export const hardGoTo = createAction(types.hardGoTo);

export const initWindowHeight = createAction(types.initWindowHeight);
export const updateWindowHeight = createAction(types.updateWindowHeight);
export const updateNavHeight = createAction(types.updateNavHeight);


// data
export const updateChallengesData = createAction(types.updateChallengesData);
export const updateJobsData = createAction(types.updateJobsData);
export const updateHikesData = createAction(types.updateHikesData);

export const createErrorObservable = error => Observable.just({
  type: types.handleError,
  error
});
// doActionOnError(
//   actionCreator: (() => Action|Null)
// ) => (error: Error) => Observable[Action]
export const doActionOnError = actionCreator => error => Observable.of(
  {
    type: types.handleError,
    error
  },
  actionCreator()
);


// drawers
export const toggleMapDrawer = createAction(
  types.toggleMapDrawer,
  null,
  () => createEventMeta({
    category: 'Nav',
    action: 'toggled',
    label: 'Map drawer toggled'
  })
);
export const closeMapDrawer = createAction(
  types.closeMapDrawer,
  null,
  () => createEventMeta({
    category: 'Nav',
    action: 'clicked',
    label: 'Map drawer closed'
  })
);
export const toggleMainChat = createAction(
  types.toggleMainChat,
  null,
  () => createEventMeta({
    category: 'Nav',
    action: 'toggled',
    label: 'Main chat toggled'
  })
);
export const toggleHelpChat = createAction(
  types.toggleHelpChat,
  null,
  () => createEventMeta({
    category: 'Challenge',
    action: 'toggled',
    label: 'help chat toggled'
  })
);
export const openHelpChat = createAction(
  types.openHelpChat,
  null,
  () => createEventMeta({
    category: 'Challenge',
    action: 'opened',
    label: 'help chat opened'
  })
);
export const closeHelpChat = createAction(
  types.closeHelpChat,
  null,
  () => createEventMeta({
    category: 'Challenge',
    action: 'closed',
    label: 'help chat closed'
  })
);

export const toggleNightMode = createAction(
  types.toggleNightMode,
  // we use this function to avoid hanging onto the eventObject
  // so that react can recycle it
  () => null
);
// updateTheme(theme: /night|default/) => Action
export const updateTheme = createAction(types.updateTheme);
// addThemeToBody(theme: /night|default/) => Action
export const addThemeToBody = createAction(types.addThemeToBody);
