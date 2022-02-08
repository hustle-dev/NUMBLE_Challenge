export interface stateProps {
  isPlaying: boolean;
  stage: number;
  time: number;
  score: number;
}

export type actionType =
  | { type: 'CHOOSE_ANSWER' }
  | { type: 'CHOOSE_WRONG_ANSWER' }
  | { type: 'TICK_TOCK' }
  | { type: 'GAME_OVER' }
  | { type: 'GAME_RESET' };
