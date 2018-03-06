import { findIndex, invert, pick, property, merge, union } from 'lodash';
import uuid from 'uuid/v4';
import {
  combineActions,
  composeReducers,
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import { themes } from '../../utils/themes';
import { usernameSelector, types as app } from '../redux';
import { types as challenges } from '../routes/Challenges/redux';
import { types as map } from '../Map/redux';

export const ns = 'entities';
export const getNS = state => state[ns];
export const entitiesSelector = getNS;
export const types = createTypes([
  'addPortfolioItem',
  'optoUpdatePortfolio',
  'regresPortfolio',
  'updateMultipleUserFlags',
  'updateTheme',
  'updateUserFlag',
  'updateUserEmail',
  'updateUserLang',
  'updateUserCurrentChallenge'
], ns);

// addPortfolioItem(...PortfolioItem) => Action
export const addPortfolioItem = createAction(types.addPortfolioItem);
// optoUpdatePortfolio(...PortfolioItem) => Action
export const optoUpdatePortfolio = createAction(types.optoUpdatePortfolio);
// regresPortfolio(id: String) => Action
export const regresPortfolio = createAction(types.regresPortfolio);

// updateMultipleUserFlags({ username: String, flags: { String }) => Action
export const updateMultipleUserFlags = createAction(
  types.updateMultipleUserFlags
);

// updateUserFlag(username: String, flag: String) => Action
export const updateUserFlag = createAction(
  types.updateUserFlag,
  (username, flag) => ({ username, flag })
);
// updateUserEmail(username: String, email: String) => Action
export const updateUserEmail = createAction(
  types.updateUserEmail,
  (username, email) => ({ username, email })
);
// updateUserLang(username: String, lang: String) => Action
export const updateUserLang = createAction(
  types.updateUserLang,
  (username, lang) => ({ username, languageTag: lang })
);

export const updateUserCurrentChallenge = createAction(
  types.updateUserCurrentChallenge
);

// entity meta creators
const getEntityAction = property('meta.entitiesAction');

export const updateThemeMetacreator = (username, theme) => ({
  entitiesAction: {
    type: types.updateTheme,
    payload: {
      username,
      theme: !theme || theme === themes.default ? themes.default : themes.night
    }
  }
});

export function emptyPortfolio() {
  return {
  id: uuid(),
  title: '',
  description: '',
  url: '',
  image: ''
  };
}

const defaultState = {
  superBlock: {},
  block: {},
  challenge: {},
  user: {},
  fullBlocks: []
};

export function selectiveChallengeTitleSelector(state, dashedName) {
  return getNS(state).challenge[dashedName].title;
}

export function portfolioSelector(state, props) {
  const username = usernameSelector(state);
  const { portfolio } = getNS(state).user[username];
  const pIndex = findIndex(portfolio, p => p.id === props.id);
  return portfolio[pIndex];
}

export function projectsSelector(state) {
  const blocks = getNS(state).block;
  const challengeNameToIdMap = invert(challengeIdToNameMapSelector(state));
  return Object.keys(blocks)
    .filter(key =>
      key.includes('projects') && !key.includes('coding-interview')
    )
    .map(key => blocks[key])
    .map(({ title, challenges, superBlock }) => {
      const projectChallengeDashNames = challenges
        // remove any project intros
        .filter(chal => !chal.includes('get-set-for'));
      const projectChallenges = projectChallengeDashNames
        .map(dashedName => selectiveChallengeTitleSelector(state, dashedName));
      return {
        projectBlockName: title,
        superBlock,
        challenges: projectChallenges,
        challengeNameIdMap: pick(
          challengeNameToIdMap,
          projectChallengeDashNames
        )
      };
    });
}

export function challengeIdToNameMapSelector(state) {
  return getNS(state).challengeIdToName || {};
}

export const challengeMapSelector = state => getNS(state).challenge || {};

export function makeBlockSelector(block) {
  return state => {
    const blockMap = getNS(state).block || {};
    return blockMap[block] || {};
  };
}

export function makeSuperBlockSelector(name) {
  return state => {
    const superBlock = getNS(state).superBlock || {};
    return superBlock[name] || {};
  };
}

export const isChallengeLoaded = (state, { dashedName }) =>
  !!challengeMapSelector(state)[dashedName];

export const fullBlocksSelector = state => getNS(state).fullBlocks;

export default composeReducers(
  ns,
  function metaReducer(state = defaultState, action) {
    const { meta } = action;
    if (meta && meta.entities) {
      if (meta.entities.user) {
        return {
          ...state,
          user: {
            ...state.user,
            ...meta.entities.user
          }
        };
      }
      return merge({}, state, action.meta.entities);
    }
    return state;
  },
  function entitiesReducer(state = defaultState, action) {
    if (getEntityAction(action)) {
      const { payload: { username, theme } } = getEntityAction(action);
      return {
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            theme
          }
        }
      };
    }
    return state;
  },
  handleActions(
    () => ({
      [
        combineActions(
          app.fetchChallenges.complete,
          map.fetchMapUi.complete
        )
      ]: (state, { payload: { entities } }) => merge({}, state, entities),
      [app.fetchChallenges.complete]:
      (state, { payload: { entities: { block }}}) => ({
        ...state,
        fullBlocks: union(state.fullBlocks, [ Object.keys(block)[0] ])
      }),
      [
        challenges.submitChallenge.complete
      ]: (state, { payload: { username, points, challengeInfo } }) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            points,
            challengeMap: {
              ...state.user[username].challengeMap,
              [challengeInfo.id]: challengeInfo
            }
          }
        }
      }),
      [types.addPortfolioItem]: (state, { payload: username }) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            portfolio: [
              ...state.user[username].portfolio,
              emptyPortfolio()
            ]
          }
        }
      }),
      [types.optoUpdatePortfolio]: (
        state,
        { payload: { username, portfolio }}
      ) => {
        const currentPortfolio = state.user[username].portfolio.slice(0);
        const pIndex = findIndex(currentPortfolio, p => p.id === portfolio.id);
        const updatedPortfolio = currentPortfolio;
        updatedPortfolio[pIndex] = portfolio;
        return {
          ...state,
          user: {
            ...state.user,
            [username]: {
              ...state.user[username],
              portfolio: updatedPortfolio
            }
          }
        };
      },
      [types.regresPortfolio]: (state, { payload: { username, id } }) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            portfolio: state.user[username].portfolio.filter(p => p.id !== id)
          }
        }
      }),
      [types.updateMultipleUserFlags]: (
        state,
        { payload: { username, flags }}
      ) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            ...flags
          }
        }
      }),
      [types.updateUserFlag]: (state, { payload: { username, flag } }) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            [flag]: !state.user[username][flag]
          }
        }
      }),
      [types.updateUserEmail]: (state, { payload: { username, email } }) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            email
          }
        }
      }),
      [types.updateUserLang]:
      (
        state,
        {
          payload: { username, languageTag }
        }
      ) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            languageTag
          }
        }
      }),
      [types.updateUserCurrentChallenge]:
      (
        state,
        {
          payload: { username, currentChallengeId }
        }
      ) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            currentChallengeId
          }
        }
      })
    }),
    defaultState
  )
);
