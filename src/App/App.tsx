import React from 'react';
import { Header, A11yHidden, GameInfo, Board, BoardItem } from 'components';

export default function App(): JSX.Element {
  const style = {
    width: '176px',
    height: '176px',
    margin: '2px',
    backgroundColor: 'rgba(224, 153, 43)',
  };

  // 상태: isPlaying, stage, baseColor, answerColor, score, time, onSelect

  return (
    <>
      <Header>
        <A11yHidden as="h1">다른 색깔 찾기 게임</A11yHidden>
        <GameInfo />
      </Header>
      <Board>
        <BoardItem style={style} />
        <BoardItem style={style} />
        <BoardItem style={style} />
        <BoardItem style={style} />
      </Board>
    </>
  );
}
