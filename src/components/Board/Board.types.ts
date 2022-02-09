interface BoardData {
  size: string;
  numOfBoardItems: number;
  answerIndex: number;
  boardColor: string;
  answerBoardColor: string;
}

export default interface BoardProps {
  boardData: BoardData;
  onClick: (isAnswer: boolean) => void;
}
