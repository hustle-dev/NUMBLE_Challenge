import React from 'react';
import { GameInfoProps, HeaderProps } from './Header.types';

export default function Header({ children }: HeaderProps): JSX.Element {
  return <header>{children}</header>;
}

Header.GameInfo = function GameInfo({ gameInfo }: GameInfoProps): JSX.Element {
  const { stage, time, score } = gameInfo;

  return (
    <span>
      스테이지:{stage}, 남은시간: {time}, 점수: {score}
    </span>
  );
};
