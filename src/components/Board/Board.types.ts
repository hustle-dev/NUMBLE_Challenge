interface BoardData {
  size: string;
  boardColor: string;
  answerBoardColor: string;
  numOfBoardItems: number;
  answerIndex: number;
  onClick: (isAnswer: boolean) => void;
}

export default interface BoardProps {
  boardData: BoardData;
}
