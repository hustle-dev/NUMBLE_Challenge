export const getLengthOfBoardRow = (stage: number): number => Math.round((stage + 0.5) / 2) + 1;

export const getColorDiff = (stage: number): number => Math.max(25 - Math.floor((stage + 1) / 3), 1);

export const getAnswerIndex = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

export const getNumOfBoardItems = (lengthOfBoardRow: number): number => lengthOfBoardRow ** 2;

export const getRandomBoolean = (): boolean => Math.random() < 0.5;
