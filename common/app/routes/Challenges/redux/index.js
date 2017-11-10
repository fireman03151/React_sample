import {
  combineActions,
  combineReducers,
  createAction,
  createAsyncTypes,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';
import { createSelector } from 'reselect';
import noop from 'lodash/noop';

import bugEpic from './bug-epic';
import completionEpic from './completion-epic.js';
import challengeEpic from './challenge-epic.js';
import editorEpic from './editor-epic.js';

import ns from '../ns.json';
import {
  createTests,
  loggerToStr,
  submitTypes,
  viewTypes
} from '../utils';
import {
  types as app,
  challengeSelector
} from '../../../redux';
import { html } from '../../../utils/challengeTypes.js';
import blockNameify from '../../../utils/blockNameify.js';
import { getFileKey } from '../../../utils/classic-file.js';
import stepReducer, { epics as stepEpics } from '../views/step/redux';
import quizReducer from '../views/quiz/redux';
import projectReducer from '../views/project/redux';

// this is not great but is ok until we move to a different form type
export projectNormalizer from '../views/project/redux';

export const epics = [
  bugEpic,
  completionEpic,
  challengeEpic,
  editorEpic,
  ...stepEpics
];

export const types = createTypes([
  'onRouteChallengeRoot',
  'onRouteChallenges',
  'onRouteCurrentChallenge',
  // challenges
  // |- classic
  'classicEditorUpdated',
  'challengeUpdated',
  'clickOnReset',
  'updateHint',
  'lockUntrustedCode',
  'unlockUntrustedCode',
  'closeChallengeModal',
  'updateSuccessMessage',

  // rechallenge
  'executeChallenge',
  'updateMain',
  'runTests',
  'frameMain',
  'frameTests',
  'updateOutput',
  'initOutput',
  'updateTests',
  'checkChallenge',
  createAsyncTypes('submitChallenge'),
  'moveToNextChallenge',

  // bug
  'openBugModal',
  'closeBugModal',
  'openIssueSearch',
  'createIssue',

  // panes
  'toggleClassicEditor',
  'toggleMain',
  'toggleMap',
  'togglePreview',
  'toggleSidePanel',
  'toggleStep'
], ns);

// routes
export const onRouteChallenges = createAction(types.onRouteChallenges);
export const onRouteCurrentChallenge =
  createAction(types.onRouteCurrentChallenge);

// classic
export const classicEditorUpdated = createAction(types.classicEditorUpdated);
// challenges
export const closeChallengeModal = createAction(types.closeChallengeModal);
export const updateHint = createAction(types.updateHint);
export const lockUntrustedCode = createAction(types.lockUntrustedCode);
export const unlockUntrustedCode = createAction(
  types.unlockUntrustedCode,
  () => null
);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);
export const challengeUpdated = createAction(
  types.challengeUpdated,
  challenge => ({ challenge })
);
export const clickOnReset = createAction(types.clickOnReset);

// rechallenge
export const executeChallenge = createAction(
  types.executeChallenge,
  noop,
);

export const updateMain = createAction(types.updateMain);
export const frameMain = createAction(types.frameMain);
export const frameTests = createAction(types.frameTests);

export const runTests = createAction(types.runTests);
export const updateTests = createAction(types.updateTests);

export const initOutput = createAction(types.initOutput, loggerToStr);
export const updateOutput = createAction(types.updateOutput, loggerToStr);

export const checkChallenge = createAction(types.checkChallenge);

export const submitChallenge = createAction(types.submitChallenge);
export const submitChallengeComplete = createAction(
  types.submitChallenge.complete,
  (username, points, challengeInfo) => ({ username, points, challengeInfo })
);

export const moveToNextChallenge = createAction(types.moveToNextChallenge);

// bug
export const openBugModal = createAction(types.openBugModal);
export const closeBugModal = createAction(types.closeBugModal);
export const openIssueSearch = createAction(types.openIssueSearch);
export const createIssue = createAction(types.createIssue);

const initialUiState = {
  output: null,
  isChallengeModalOpen: false,
  isBugOpen: false,
  successMessage: 'Happy Coding!'
};

const initialState = {
  isCodeLocked: false,
  id: '',
  challenge: '',
  helpChatRoom: 'Help',
  // old code storage key
  legacyKey: '',
  // map
  superBlocks: [],
  // misc
  ...initialUiState
};

export const getNS = state => state[ns];
export const keySelector = state => getNS(state).key;
export const testsSelector = state => getNS(state).tests;

export const outputSelector = state => getNS(state).output;
export const successMessageSelector = state => getNS(state).successMessage;
export const hintIndexSelector = state => getNS(state).hintIndex;
export const codeLockedSelector = state => getNS(state).isCodeLocked;
export const chatRoomSelector = state => getNS(state).helpChatRoom;
export const challengeModalSelector =
  state => getNS(state).isChallengeModalOpen;

export const bugModalSelector = state => getNS(state).isBugOpen;

export const challengeMetaSelector = createSelector(
  // use closure to get around circular deps
  (...args) => challengeSelector(...args),
  challenge => {
    if (!challenge.id) {
      return {};
    }
    const challengeType = challenge && challenge.challengeType;
    const type = challenge && challenge.type;
    const viewType = viewTypes[type] || viewTypes[challengeType] || 'classic';
    const blockName = blockNameify(challenge.block);
    const title = blockName && challenge.title ?
      `${blockName}: ${challenge.title}` :
      challenge.title;

    return {
      title,
      viewType,
      submitType:
        submitTypes[challengeType] ||
        submitTypes[challenge && challenge.type] ||
        'tests',
      showPreview: challengeType === html,
      mode: challenge && challengeType === html ?
        'text/html' :
        'javascript'
    };
  }
);

export default combineReducers(
  handleActions(
    () => ({
      [
        combineActions(
          types.challengeUpdated,
          app.fetchChallenge.complete
        )
      ]: (state, { payload: { challenge } }) => {
        return {
          ...state,
          ...initialUiState,
          id: challenge.id,
          challenge: challenge.dashedName,
          key: getFileKey(challenge),
          tests: createTests(challenge),
          helpChatRoom: challenge.helpRoom || 'Help'
        };
      },
      [types.updateTests]: (state, { payload: tests }) => ({
        ...state,
        tests,
        isChallengeModalOpen: (
          tests.length > 0 &&
          tests.every(test => test.pass && !test.err)
        )
      }),
      [types.closeChallengeModal]: state => ({
        ...state,
        isChallengeModalOpen: false
      }),
      [types.updateSuccessMessage]: (state, { payload }) => ({
        ...state,
        successMessage: payload
      }),
      [types.lockUntrustedCode]: state => ({
        ...state,
        isCodeLocked: true
      }),
      [types.unlockUntrustedCode]: state => ({
        ...state,
        isCodeLocked: false
      }),
      [types.executeChallenge]: state => ({
        ...state,
        tests: state.tests.map(test => ({ ...test, err: false, pass: false }))
      }),

      // classic/modern
      [types.initOutput]: (state, { payload: output }) => ({
        ...state,
        output
      }),
      [types.updateOutput]: (state, { payload: output }) => ({
        ...state,
        output: (state.output || '') + output
      }),

      [types.openBugModal]: state => ({ ...state, isBugOpen: true }),
      [types.closeBugModal]: state => ({ ...state, isBugOpen: false })
    }),
    initialState,
    ns
  ),
  stepReducer,
  quizReducer,
  projectReducer
);
