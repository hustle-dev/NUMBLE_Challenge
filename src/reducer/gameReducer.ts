import { getColor, getScore } from 'utils';
import { INITIAL_REMAINING_TIME, INITIAL_STAGE, ONE_SECOND, PENALTY_TIME } from './gameConstants';
import { actionType, stateProps } from './gameReducer.types';

export const initialState = Object.freeze({
  isPlaying: true,
  time: INITIAL_REMAINING_TIME,
  stage: INITIAL_STAGE,
  score: 0,
  ...getColor(INITIAL_STAGE),
});

export function reducer(state: stateProps, action: actionType) {
  switch (action.type) {
    case 'CHOOSE_ANSWER':
      return {
        ...state,
        stage: state.stage + 1,
        time: INITIAL_REMAINING_TIME,
        score: state.score + getScore(state.stage, state.time),
        ...getColor(state.stage + 1),
      };

    case 'CHOOSE_WRONG_ANSWER':
      return {
        ...state,
        time: state.time - PENALTY_TIME < 0 ? 0 : state.time - PENALTY_TIME,
      };

    case 'TICK_TOCK':
      return {
        ...state,
        time: state.time - ONE_SECOND < 0 ? 0 : state.time - ONE_SECOND,
      };

    case 'GAME_OVER':
      return {
        ...state,
        isPlaying: false,
      };

    case 'GAME_RESET':
      return {
        ...initialState,
        ...getColor(INITIAL_STAGE),
      };

    default:
      throw new Error('잘못된 동작입니다.');
  }
}
