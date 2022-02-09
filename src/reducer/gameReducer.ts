import { INITIAL_REMAINING_TIME, PENALTY_TIME } from './gameConstants';
import { actionType, stateProps } from './gameReducer.types';

export const initialState = Object.freeze({
  isPlaying: true,
  time: INITIAL_REMAINING_TIME,
  stage: 1,
  score: 0,
});

export function reducer(state: stateProps, action: actionType) {
  switch (action.type) {
    case 'CHOOSE_ANSWER':
      return {
        ...state,
        stage: state.stage + 1,
        time: INITIAL_REMAINING_TIME,
        score: state.score + state.stage ** 3 * state.time,
      };

    case 'CHOOSE_WRONG_ANSWER':
      return {
        ...state,
        time: state.time - PENALTY_TIME < 0 ? 0 : state.time - PENALTY_TIME,
      };

    case 'TICK_TOCK':
      return {
        ...state,
        time: state.time - 1 < 0 ? 0 : state.time - 1,
      };

    case 'GAME_OVER':
      return {
        ...state,
        isPlaying: false,
      };

    case 'GAME_RESET':
      return initialState;

    default:
      throw new Error('잘못된 동작입니다.');
  }
}
