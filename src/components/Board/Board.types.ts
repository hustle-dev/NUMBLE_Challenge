import { ReactNode } from 'react';

interface BoardData {
  size: string;
  numOfBoardItems: number;
  answerIndex: number;
  boardColor: string;
  answerBoardColor: string;
}

export interface BoardProps {
  children: ReactNode;
}

export interface BoardListProps {
  boardData: BoardData;
  onClick: (isAnswer: boolean) => void;
}
