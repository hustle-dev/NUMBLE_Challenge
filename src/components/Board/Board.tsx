import React, { memo } from 'react';
import './Board.css';
import { BoardProps, BoardListProps } from './Board.types';

export default function Board({ children }: BoardProps): JSX.Element {
  return <div className="wrapper">{children}</div>;
}

Board.List = memo(function BoardList({ boardData, onClick }: BoardListProps) {
  const { size, numOfBoardItems, answerIndex, boardColor, answerBoardColor } = boardData;

  return (
    <>
      {Array.from({ length: numOfBoardItems }, (_, i) => (
        <div
          key={i}
          role="button"
          className="board-item"
          tabIndex={0}
          aria-label="보드 아이템"
          onKeyPress={() => {
            onClick(i === answerIndex);
          }}
          style={{
            width: size,
            height: size,
            backgroundColor: i === answerIndex ? answerBoardColor : boardColor,
          }}
          onClick={() => {
            onClick(i === answerIndex);
          }}
        />
      ))}
    </>
  );
});
