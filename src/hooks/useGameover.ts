import { Dispatch } from 'react';
import { actionType } from 'reducer/gameReducer.types';

export default function useGameover(isPlaying: boolean, stage: number, score: number, dispatch: Dispatch<actionType>) {
  if (isPlaying) return;

  window.alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
  dispatch({ type: 'GAME_RESET' });
}
