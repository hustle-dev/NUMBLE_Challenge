import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import { Header, A11yHidden, GameInfo, Board } from 'components';
import { initialState, reducer } from 'reducer';
import {
  getAnswerBoardColor,
  getAnswerIndex,
  getBoardColor,
  getBoardItemSize,
  getColorDiff,
  getLengthOfBoardRow,
  getNumOfBoardItems,
  getRGBColorArray,
} from 'utils';

export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isPlaying, stage, time, score } = state;

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: 'TICK_TOCK' });
    }, 1000);

    if (time === 0) dispatch({ type: 'GAME_OVER' });

    return () => {
      clearInterval(intervalID);
    };
  }, [time, dispatch]);

  useEffect(() => {
    if (isPlaying) return;

    window.alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);

    dispatch({ type: 'GAME_RESET' });
  }, [isPlaying, dispatch, stage, score]);

  const boardData = useMemo(() => {
    const lengthOfBoardRow = getLengthOfBoardRow(stage);
    const numOfBoardItems = getNumOfBoardItems(lengthOfBoardRow);
    const size = getBoardItemSize(lengthOfBoardRow);
    const answerIndex = getAnswerIndex(0, numOfBoardItems);

    const rgbArray = getRGBColorArray();
    const boardColor = getBoardColor(rgbArray);
    const answerBoardColor = getAnswerBoardColor(rgbArray, getColorDiff(stage));

    return {
      size,
      numOfBoardItems,
      answerIndex,
      boardColor,
      answerBoardColor,
    };
  }, [stage]);

  const onClick = useCallback((isAnswer: boolean) => {
    if (isAnswer) {
      dispatch({ type: 'CHOOSE_ANSWER' });
    } else {
      dispatch({ type: 'CHOOSE_WRONG_ANSWER' });
    }
  }, []);

  return (
    <>
      <Header>
        <A11yHidden as="h1">다른 색깔 찾기 게임</A11yHidden>
        <GameInfo stage={stage} time={time} score={score} />
      </Header>
      <Board boardData={boardData} onClick={onClick} />
    </>
  );
}
