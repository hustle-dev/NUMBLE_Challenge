import { Dispatch, useEffect } from 'react';
import { actionType } from 'reducer/gameReducer.types';

export default function useTimer(dispatch: Dispatch<actionType>, time: number) {
  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: 'TICK_TOCK' });
    }, 1000);

    if (time === 0) dispatch({ type: 'GAME_OVER' });

    return () => {
      clearInterval(intervalID);
    };
  }, [time]);
}
