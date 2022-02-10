import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { Header, A11yHidden, GameInfo, Board } from 'components';
import { initialState, reducer } from 'reducer';
import { getAnswerIndex, getBoardItemSize, getLengthOfBoardRow, getNumOfBoardItems } from 'utils';

export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isPlaying, stage, time, score, boardColor, answerBoardColor } = state;

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

    setTimeout(() => {
      window.alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);

      dispatch({ type: 'GAME_RESET' });
    }, 100);
  }, [isPlaying, dispatch, stage, score]);

  const boardData = useMemo(() => {
    const lengthOfBoardRow = getLengthOfBoardRow(stage);
    const numOfBoardItems = getNumOfBoardItems(lengthOfBoardRow);
    const size = getBoardItemSize(lengthOfBoardRow);
    const answerIndex = getAnswerIndex(0, numOfBoardItems);

    return {
      size,
      numOfBoardItems,
      answerIndex,
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
      <Board boardData={boardData} boardColor={boardColor} answerBoardColor={answerBoardColor} onClick={onClick} />
    </>
  );
}
