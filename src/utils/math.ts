export const getLengthOfBoardRow = (stage: number): number => Math.round((stage + 0.5) / 2) + 1;

export const getAnswerIndex = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

export const getNumOfBoardItems = (lengthOfBoardRow: number): number => lengthOfBoardRow ** 2;

export const getScore = (stage: number, time: number): number => stage ** 3 * time;
