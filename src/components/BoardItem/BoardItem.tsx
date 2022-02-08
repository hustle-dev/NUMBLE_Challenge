import React, { memo } from 'react';
import './BoardItem.css';
import BoardItemProps from './BoardItem.types';

export default memo(function BoardItem({ size, boardColor, onClick }: BoardItemProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="보드 아이템"
      onKeyPress={onClick}
      style={{
        width: size,
        height: size,
        backgroundColor: boardColor,
      }}
      className="board-item"
      onClick={onClick}
    />
  );
});
