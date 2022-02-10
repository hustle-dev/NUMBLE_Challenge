import { ReactNode } from 'react';

export interface HeaderProps {
  children: ReactNode;
}

interface GameInfo {
  stage: number;
  time: number;
  score: number;
}

export interface GameInfoProps {
  gameInfo: GameInfo;
}
