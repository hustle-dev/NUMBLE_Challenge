import React, { memo } from 'react';
import './Board.css';
import { BoardItem } from 'components';
import BoardProps from './Board.types';

export default memo(function Board({ boardData }: BoardProps): JSX.Element {
  const { size, boardColor, answerBoardColor, numOfBoardItems, answerIndex, onClick } = boardData;

  // boardItem을 위한 키를 만들어야 할듯...
  return (
    <div className="wrapper">
      {Array.from({ length: numOfBoardItems }, (_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <BoardItem
          // eslint-disable-next-line react/no-array-index-key
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
