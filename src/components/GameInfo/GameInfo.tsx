import React, { memo } from 'react';
import GameInfoProps from './GameInfo.types';

export default memo(function GameInfo({ stage, time, score }: GameInfoProps): JSX.Element {
  return (
    <span>
      스테이지:{stage}, 남은시간: {time}, 점수: {score}
    </span>
  );
});
