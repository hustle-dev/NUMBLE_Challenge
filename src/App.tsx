import React from 'react';
import { Header, A11yHidden, Board } from 'components';
import { useGame } from 'hooks';

export default function App(): JSX.Element {
  const { gameInfo, boardData, onClick } = useGame();

  return (
    <>
      <Header>
        <A11yHidden as="h1">다른 색깔 찾기 게임</A11yHidden>
        <Header.GameInfo gameInfo={gameInfo} />
      </Header>
      <Board>
        <Board.List boardData={boardData} onClick={onClick} />
      </Board>
    </>
  );
}
