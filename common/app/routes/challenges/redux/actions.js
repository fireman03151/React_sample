import { createAction } from 'redux-actions';
import { updateContents } from '../../../../utils/polyvinyl';
import { loggerToStr } from '../utils';

import types from './types';

// step
export const goToStep = createAction(types.goToStep);


// challenges
export const fetchChallenge = createAction(types.fetchChallenge);
export const fetchChallengeCompleted = createAction(
  types.fetchChallengeCompleted,
  (_, challenge) => challenge,
  entities => ({ entities })
);

export const fetchChallenges = createAction(types.fetchChallenges);
export const fetchChallengesCompleted = createAction(
  types.fetchChallengesCompleted,
  (_, superBlocks) => superBlocks,
  entities => ({ entities })
);

export const updateCurrentChallenge = createAction(
  types.updateCurrentChallenge
);

// map
export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);

export const clearFilter = createAction(types.clearFilter);

// files
export const updateFile = createAction(
  types.updateFile,
  (content, file) => updateContents(content, file)
);

export const updateFiles = createAction(types.updateFiles);

// rechallenge
export const executeChallenge = createAction(types.executeChallenge);

export const updateMain = createAction(types.updateMain);
export const frameMain = createAction(types.frameMain);
export const frameTests = createAction(types.frameTests);

export const runTests = createAction(types.runTests);
export const updateTests = createAction(types.updateTests);

export const initOutput = createAction(types.initOutput, loggerToStr);
export const updateOutput = createAction(types.updateOutput, loggerToStr);

export const checkChallenge = createAction(types.checkChallenge);

export const showProjectSubmit = createAction(types.showProjectSubmit);
let id = 0;
export const showChallengeComplete = createAction(
  types.showChallengeComplete,
  () => {
    id += 1;
    return id;
  }
);

export const submitChallenge = createAction(types.submitChallenge);
export const moveToNextChallenge = createAction(types.moveToNextChallenge);

// code storage
export const saveCode = createAction(types.saveCode);
export const loadCode = createAction(types.loadCode);
export const savedCodeFound = createAction(types.savedCodeFound);
