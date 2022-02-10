import React, { memo } from 'react';
import './Board.css';
import { BoardItem } from 'components';
import BoardProps from './Board.types';

export default memo(function Board({ boardData, boardColor, answerBoardColor, onClick }: BoardProps): JSX.Element {
  const { size, numOfBoardItems, answerIndex } = boardData;

  return (
    <div className="wrapper">
      {Array.from({ length: numOfBoardItems }, (_, i) => (
        <BoardItem
          key={i}
          size={size}
          boardColor={i === answerIndex ? answerBoardColor : boardColor}
          onClick={() => {
            onClick(i === answerIndex);
          }}
        />
      ))}
    </div>
  );
});
