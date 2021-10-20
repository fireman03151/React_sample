import { nanoid } from 'nanoid';
import { FlashState, State } from '../../../redux/types';

export const FlashApp = 'flash';

const initialState = {
  message: {
    id: '',
    type: '',
    message: ''
  }
};

export const sagas = [];

export const flashMessageSelector = (state: State): FlashState['message'] =>
  state[FlashApp].message;

// ACTION DEFINITIONS

enum FlashActionTypes {
  createFlashMessage = 'createFlashMessage',
  removeFlashMessage = 'removeFlashMessage'
}

export type FlashMessageArg = {
  type: string;
  message: string;
  variables?: Record<string, unknown>;
};

export const createFlashMessage = (
  flash: FlashMessageArg
): ReducerPayload<FlashActionTypes.createFlashMessage> => ({
  type: FlashActionTypes.createFlashMessage,
  payload: { ...flash, id: nanoid() }
});

export const removeFlashMessage =
  (): ReducerPayload<FlashActionTypes.removeFlashMessage> => ({
    type: FlashActionTypes.removeFlashMessage
  });

// REDUCER
type ReducerBase<T> = { type: T };
type ReducerPayload<T extends FlashActionTypes> =
  T extends FlashActionTypes.createFlashMessage
    ? ReducerBase<T> & {
        payload: FlashState['message'];
      }
    : ReducerBase<T>;

// Does reducer return FlashState or AppState (whole app)?
export const reducer = (
  state: FlashState = initialState,
  action: ReducerPayload<FlashActionTypes>
): FlashState => {
  switch (action.type) {
    case FlashActionTypes.createFlashMessage:
      return { ...state, message: action.payload };
    case FlashActionTypes.removeFlashMessage:
      return { ...state, message: initialState.message };
    default:
      return state;
  }
};
