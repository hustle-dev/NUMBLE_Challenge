import React, { memo } from 'react';
import './BoardItem.css';
import BoardItemProps from './BoardItem.types';

export default memo(function BoardItem({ size, boardColor, onClick }: BoardItemProps): JSX.Element {
  return (
    <div
      role="button"
      className="board-item"
      tabIndex={0}
      aria-label="보드 아이템"
      onKeyPress={onClick}
      style={{
        width: size,
        height: size,
        backgroundColor: boardColor,
      }}
      onClick={onClick}
    />
  );
});
