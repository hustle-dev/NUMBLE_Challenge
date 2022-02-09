import React, { memo } from 'react';
import './Board.css';
import { BoardItem } from 'components';
import BoardProps from './Board.types';

export default memo(function Board({ boardData }: BoardProps): JSX.Element {
  const { size, boardColor, answerBoardColor, onClick, boardItems } = boardData;

  return (
    <div className="wrapper">
      {boardItems.map(({ id, isAnswer }) => (
        <BoardItem
          key={id}
          size={size}
          boardColor={isAnswer ? answerBoardColor : boardColor}
          onClick={() => {
            onClick(isAnswer);
          }}
        />
      ))}
    </div>
  );
});
