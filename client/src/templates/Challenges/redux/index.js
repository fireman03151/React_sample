import { createAction, handleActions } from 'redux-actions';
import { reducer as reduxFormReducer } from 'redux-form';

import { createTypes } from '../../../../utils/stateManagement';
import { createAsyncTypes } from '../../../utils/createTypes';

import { createPoly } from '../utils/polyvinyl';
import challengeModalEpic from './challenge-modal-epic';
import completionEpic from './completion-epic';
import codeLockEpic from './code-lock-epic';
import createQuestionEpic from './create-question-epic';
import codeStorageEpic from './code-storage-epic';

import { createIdToNameMapSaga } from './id-to-name-map-saga';
import { createExecuteChallengeSaga } from './execute-challenge-saga';
import { createCurrentChallengeSaga } from './current-challenge-saga';
import { challengeTypes } from '../../../../utils/challengeTypes';

export const ns = 'challenge';
export const backendNS = 'backendChallenge';

const initialState = {
  challengeFiles: {},
  challengeIdToNameMap: {},
  challengeMeta: {
    id: '',
    nextChallengePath: '/',
    introPath: '',
    challengeType: -1
  },
  challengeTests: [],
  consoleOut: '',
  isCodeLocked: false,
  isBuildEnabled: true,
  modal: {
    completion: false,
    help: false,
    video: false,
    reset: false
  },
  projectFormValues: {},
  successMessage: 'Happy Coding!'
};

export const types = createTypes(
  [
    'createFiles',
    'createQuestion',
    'initTests',
    'initConsole',
    'initLogs',
    'updateBackendFormValues',
    'updateConsole',
    'updateChallengeMeta',
    'updateFile',
    'updateJSEnabled',
    'updateProjectFormValues',
    'updateSuccessMessage',
    'updateTests',
    'updateLogs',

    'logsToConsole',

    'lockCode',
    'unlockCode',
    'disableBuildOnError',
    'storedCodeFound',
    'noStoredCodeFound',

    'closeModal',
    'openModal',

    'previewMounted',
    'challengeMounted',
    'checkChallenge',
    'executeChallenge',
    'resetChallenge',
    'submitChallenge',

    'moveToTab',

    ...createAsyncTypes('fetchIdToNameMap')
  ],
  ns
);

export const epics = [
  challengeModalEpic,
  codeLockEpic,
  completionEpic,
  createQuestionEpic,
  codeStorageEpic
];

export const sagas = [
  ...createIdToNameMapSaga(types),
  ...createExecuteChallengeSaga(types),
  ...createCurrentChallengeSaga(types)
];

export const createFiles = createAction(types.createFiles, challengeFiles =>
  Object.keys(challengeFiles)
    .filter(key => challengeFiles[key])
    .map(key => challengeFiles[key])
    .reduce(
      (challengeFiles, file) => ({
        ...challengeFiles,
        [file.key]: {
          ...createPoly(file),
          seed: file.contents.slice(0)
        }
      }),
      {}
    )
);

export const fetchIdToNameMap = createAction(types.fetchIdToNameMap);
export const fetchIdToNameMapComplete = createAction(
  types.fetchIdToNameMapComplete
);
export const fetchIdToNameMapError = createAction(types.fetchIdToNameMapError);

export const createQuestion = createAction(types.createQuestion);
export const initTests = createAction(types.initTests);
export const updateTests = createAction(types.updateTests);

export const initConsole = createAction(types.initConsole);
export const initLogs = createAction(types.initLogs);
export const updateBackendFormValues = createAction(
  types.updateBackendFormValues
);
export const updateChallengeMeta = createAction(types.updateChallengeMeta);
export const updateFile = createAction(types.updateFile);
export const updateConsole = createAction(types.updateConsole);
export const updateLogs = createAction(types.updateLogs);
export const updateJSEnabled = createAction(types.updateJSEnabled);
export const updateProjectFormValues = createAction(
  types.updateProjectFormValues
);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);

export const logsToConsole = createAction(types.logsToConsole);

export const lockCode = createAction(types.lockCode);
export const unlockCode = createAction(types.unlockCode);
export const disableBuildOnError = createAction(types.disableBuildOnError);
export const storedCodeFound = createAction(types.storedCodeFound);
export const noStoredCodeFound = createAction(types.noStoredCodeFound);

export const closeModal = createAction(types.closeModal);
export const openModal = createAction(types.openModal);

export const previewMounted = createAction(types.previewMounted);
export const challengeMounted = createAction(types.challengeMounted);
export const checkChallenge = createAction(types.checkChallenge);
export const executeChallenge = createAction(types.executeChallenge);
export const resetChallenge = createAction(types.resetChallenge);
export const submitChallenge = createAction(types.submitChallenge);

export const moveToTab = createAction(types.moveToTab);

export const currentTabSelector = state => state[ns].currentTab;
export const challengeFilesSelector = state => state[ns].challengeFiles;
export const challengeIdToNameMapSelector = state =>
  state[ns].challengeIdToNameMap;
export const challengeMetaSelector = state => state[ns].challengeMeta;
export const challengeTestsSelector = state => state[ns].challengeTests;
export const consoleOutputSelector = state => state[ns].consoleOut;
export const isCodeLockedSelector = state => state[ns].isCodeLocked;
export const isCompletionModalOpenSelector = state =>
  state[ns].modal.completion;
export const isHelpModalOpenSelector = state => state[ns].modal.help;
export const isVideoModalOpenSelector = state => state[ns].modal.video;
export const isResetModalOpenSelector = state => state[ns].modal.reset;
export const isBuildEnabledSelector = state => state[ns].isBuildEnabled;
export const successMessageSelector = state => state[ns].successMessage;

export const backendFormValuesSelector = state =>
  state[ns].backendFormValues || {};
export const projectFormValuesSelector = state =>
  state[ns].projectFormValues || {};

export const challengeDataSelector = state => {
  const { challengeType } = challengeMetaSelector(state);
  let challengeData = { challengeType };
  if (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.bonfire
  ) {
    challengeData = {
      ...challengeData,
      files: challengeFilesSelector(state)
    };
  } else if (challengeType === challengeTypes.backend) {
    const { solution: url = {} } = backendFormValuesSelector(state);
    challengeData = {
      ...challengeData,
      url
    };
  } else if (challengeType === challengeTypes.backEndProject) {
    const values = projectFormValuesSelector(state);
    const { solution: url } = values;
    challengeData = {
      ...challengeData,
      ...values,
      url
    };
  } else if (challengeType === challengeTypes.frontEndProject) {
    challengeData = {
      ...challengeData,
      ...projectFormValuesSelector(state)
    };
  } else if (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern
  ) {
    const { required = [], template = '' } = challengeMetaSelector(state);
    challengeData = {
      ...challengeData,
      files: challengeFilesSelector(state),
      required,
      template
    };
  }
  return challengeData;
};

const MAX_LOGS_SIZE = 64 * 1024;

export const reducer = handleActions(
  {
    [types.fetchIdToNameMapComplete]: (state, { payload }) => ({
      ...state,
      challengeIdToNameMap: payload
    }),
    [types.createFiles]: (state, { payload }) => ({
      ...state,
      challengeFiles: payload
    }),
    [types.updateFile]: (state, { payload: { key, editorValue } }) => ({
      ...state,
      challengeFiles: {
        ...state.challengeFiles,
        [key]: {
          ...state.challengeFiles[key],
          contents: editorValue
        }
      }
    }),
    [types.storedCodeFound]: (state, { payload }) => ({
      ...state,
      challengeFiles: payload
    }),

    [types.initTests]: (state, { payload }) => ({
      ...state,
      challengeTests: payload
    }),
    [types.updateTests]: (state, { payload }) => ({
      ...state,
      challengeTests: payload
    }),

    [types.initConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: payload
    }),
    [types.updateConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: state.consoleOut + '\n' + payload
    }),
    [types.initLogs]: state => ({
      ...state,
      logsOut: ''
    }),
    [types.updateLogs]: (state, { payload }) => ({
      ...state,
      logsOut: (state.logsOut + '\n' + payload).slice(-MAX_LOGS_SIZE)
    }),
    [types.logsToConsole]: (state, { payload }) => ({
      ...state,
      consoleOut:
        state.consoleOut +
        (state.logsOut ? '\n' + payload + '\n' + state.logsOut : '')
    }),
    [types.updateChallengeMeta]: (state, { payload }) => ({
      ...state,
      challengeMeta: { ...payload }
    }),

    [types.resetChallenge]: state => ({
      ...state,
      currentTab: 2,
      challengeFiles: {
        ...Object.keys(state.challengeFiles)
          .map(key => state.challengeFiles[key])
          .reduce(
            (files, file) => ({
              ...files,
              [file.key]: {
                ...file,
                contents: file.seed.slice()
              }
            }),
            {}
          )
      },
      challengeTests: state.challengeTests.map(({ text, testString }) => ({
        text,
        testString
      })),
      consoleOut: ''
    }),
    [types.updateBackendFormValues]: (state, { payload }) => ({
      ...state,
      backendFormValues: payload
    }),
    [types.updateProjectFormValues]: (state, { payload }) => ({
      ...state,
      projectFormValues: payload
    }),

    [types.lockCode]: state => ({
      ...state,
      isCodeLocked: true
    }),
    [types.unlockCode]: state => ({
      ...state,
      isBuildEnabled: true,
      isCodeLocked: false
    }),
    [types.disableBuildOnError]: (state, { payload }) => ({
      ...state,
      consoleOut: state.consoleOut + ' \n' + payload,
      isBuildEnabled: false
    }),

    [types.updateSuccessMessage]: (state, { payload }) => ({
      ...state,
      successMessage: payload
    }),
    [types.closeModal]: (state, { payload }) => ({
      ...state,
      modal: {
        ...state.modal,
        [payload]: false
      }
    }),
    [types.openModal]: (state, { payload }) => ({
      ...state,
      modal: {
        ...state.modal,
        [payload]: true
      }
    }),
    [types.moveToTab]: (state, { payload }) => ({
      ...state,
      currentTab: payload
    }),
    [types.executeChallenge]: state => ({
      ...state,
      currentTab: 3
    })
  },
  initialState
);

const resetProjectFormValues = handleActions(
  {
    [types.updateProjectFormValues]: (state, { payload: { solution } }) => {
      if (!solution) {
        return {
          ...state,
          solution: {},
          githubLink: {}
        };
      }
      return state;
    }
  },
  {}
);

export const formReducer = reduxFormReducer.plugin({
  'frond-end-form': resetProjectFormValues,
  'back-end-form': resetProjectFormValues
});
