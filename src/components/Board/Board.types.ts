interface BoardData {
  size: string;
  numOfBoardItems: number;
  answerIndex: number;
}

export default interface BoardProps {
  boardData: BoardData;
  boardColor: string;
  answerBoardColor: string;
  onClick: (isAnswer: boolean) => void;
}
