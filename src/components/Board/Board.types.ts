interface boardItemsIDArray {
  id: number;
  isAnswer: boolean;
}

interface BoardData {
  size: string;
  boardItems: boardItemsIDArray[];
  boardColor: string;
  answerBoardColor: string;
  onClick: (isAnswer: boolean) => void;
}

export default interface BoardProps {
  boardData: BoardData;
}
