import React, { useEffect, useMemo, useReducer } from 'react';
import { Header, A11yHidden, GameInfo, Board } from 'components';
import { initialState, reducer } from 'reducer';
import { getRowBoardItems } from 'utils';

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
  }, [time]);

  useEffect(() => {
    if (isPlaying) return;

    window.alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);

    dispatch({ type: 'GAME_RESET' });
  }, [isPlaying]);

  const boardData = useMemo(() => {
    const numOfBoardItemsInRow = getRowBoardItems(stage);
    const size = `${(360 - numOfBoardItemsInRow * 2 * 2) / numOfBoardItemsInRow}px`;

    const diff = Math.max(25 - Math.floor((stage + 1) / 3), 1);
    const getRandomRGB = () => Math.floor(Math.random() * 256);

    const getRGBColorArray = () => Array.from({ length: 3 }, () => getRandomRGB());
    const getBoardColor = ([red, green, blue]: number[]) => `rgb(${red}, ${green}, ${blue})`;
    const rgbArray = getRGBColorArray();
    const boardColor = getBoardColor(rgbArray);

    const getAnswerBoardColor = ([red, green, blue]: number[]) => `rgb(${red + diff > 255 ? red - diff : red + diff}, 
      ${green + diff > 255 ? green - diff : green + diff}
      ${blue + diff > 255 ? blue - diff : blue + diff})`;

    const answerBoardColor = getAnswerBoardColor(rgbArray);

    const getRandomIndex = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const numOfBoardItems = numOfBoardItemsInRow ** 2;
    const answerIndex = getRandomIndex(0, numOfBoardItems);

    const onClick = (isAnswer: boolean) => {
      if (isAnswer) {
        dispatch({ type: 'CHOOSE_ANSWER' });
      } else {
        dispatch({ type: 'CHOOSE_WRONG_ANSWER' });
      }
    };

    return { size, boardColor, answerBoardColor, numOfBoardItems, answerIndex, onClick };
  }, [stage]);

  return (
    <>
      <Header>
        <A11yHidden as="h1">다른 색깔 찾기 게임</A11yHidden>
        <GameInfo stage={stage} time={time} score={score} />
      </Header>
      <Board boardData={boardData} />
    </>
  );
}
