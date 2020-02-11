import { ISection } from '../../types';

/**
 * @func: Calculates the number of words per section (start / middle / end) depending on if a prologue / epiloge section has been chosen
 * @returns number
 */

export const calcWordsPerSection = (
  words: number,
  sections: ISection[],
  { prologue, epilogue }: { prologue: boolean; epilogue: boolean }
): number => {
  if (prologue && epilogue) {
    return Math.floor(words / sections.length + 2);
  }
  if (prologue || epilogue) {
    return Math.floor(words / sections.length + 1);
  }
  return Math.floor(words / sections.length);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectRandomItem = (arr: any[]): string => arr[Math.floor(Math.random() * arr.length)];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const duplicateItems = (item: any, max: number) => Array(Math.ceil(Math.random() * max)).fill(item);
