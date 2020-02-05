import {
  StructureType,
  EStoryLength,
  IStoryLength,
  ISection,
  IChapter,
  ICharacter
} from '../../types/story';
import { chunk } from 'lodash';
import storyLengthTypes from './storyLengthTypes';
import characterTypes from './characterTypes';
import characterGenerator from './characterGenerator';

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

/**
 * @func: Function to generate the response body depending on input from the Head
 * @returns array of sections
 */

export const generateBodyStructure = (
  type: StructureType,
  prologue: boolean = false,
  epilogue: boolean = false,
  maxWords: number,
  minWords: number,
  avChapters: number
) => {
  switch (type) {
    case StructureType.TRADITIONAL:
      /**
       * @desc SECTIONS
       */

      const base: ISection[] = [
        { section: 1, name: 'beginning' },
        { section: 2, name: 'middle' },
        { section: 3, name: 'end' }
      ];

      /**
       * @desc VARIABLES
       */

      const avChaptersPerSection: number = Math.floor(avChapters / base.length);
      const avMinWordsPerSection: number = calcWordsPerSection(minWords, base, {
        prologue,
        epilogue
      });
      const avMaxWordsPerSection: number = calcWordsPerSection(maxWords, base, {
        prologue,
        epilogue
      });

      const avMinWordsPerChapter: number = Math.floor(avMinWordsPerSection / avChaptersPerSection);
      const avMaxWordsPerChapter: number = Math.floor(avMaxWordsPerSection / avChaptersPerSection);

      /**
       * @desc CHAPTERS
       */

      const chapters: IChapter[] = Array.from(Array(avChapters), (x, i) => ({
        chapter: i + 1,
        avMinWordsPerChapter,
        avMaxWordsPerChapter
      }));

      const sectionChapters: IChapter[][] = chunk(chapters, avChaptersPerSection);
      base.forEach((b, i) => (b.chapters = sectionChapters[i]));

      /**
       * @desc PROLOOGUE / EPILOGUE COUNT AS STANDALONE CHAPTERS
       */

      if (prologue) {
        base.unshift({ section: 0, name: 'prologue' });
      }
      if (epilogue) {
        base.push({ section: base.length, name: 'epilogue' });
      }

      return base.map(b => {
        if (b.name === 'prologue' || b.name === 'epilogue') {
          return {
            ...b,
            avMinWordsPerSection: avMinWordsPerChapter,
            avMaxWordsPerSection: avMaxWordsPerChapter
          };
        } else {
          return {
            ...b,
            avMinWordsPerSection,
            avMaxWordsPerSection,
            avChaptersPerSection
          };
        }
      });
    default:
      return [];
  }
};

export const generateStoryLength = (type: EStoryLength): IStoryLength => {
  if (Object.values(EStoryLength).includes(type)) {
    switch (type) {
      case EStoryLength.FLASH:
        return storyLengthTypes.FLASH;
      case EStoryLength.SHORT:
        return storyLengthTypes.SHORT;
      case EStoryLength.NOVELLA:
        return storyLengthTypes.NOVELLA;
      case EStoryLength.NOVEL:
        return storyLengthTypes.NOVEL;
      case EStoryLength.EPIC:
        return storyLengthTypes.EPIC;
      default:
        return storyLengthTypes.DEFAULT;
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const duplicateItems = (item: any, max: number) =>
  Array(Math.ceil(Math.random() * max)).fill(item);

export const generateCharacterTypesList = (type: EStoryLength) => {
  if (Object.values(EStoryLength).includes(type)) {
    const {
      PROTAGONIST,
      ANTAGONIST,
      LOVE_INTEREST,
      DEUTERAGONIST,
      SYMBOLIC,
      CONFIDANTE,
      FOIL
    } = characterTypes;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const types: any[] = [];
    const randOptions1 = [LOVE_INTEREST, ANTAGONIST, SYMBOLIC];
    const randOptions2 = [DEUTERAGONIST, LOVE_INTEREST];
    const randOptions3 = [CONFIDANTE, FOIL];
    const randOptions4 = [ANTAGONIST, SYMBOLIC];

    switch (type) {
      case EStoryLength.FLASH:
        types.push([PROTAGONIST, selectRandomItem(randOptions1)]);
        return types;
      case EStoryLength.SHORT:
        types.push([PROTAGONIST, selectRandomItem(randOptions2), selectRandomItem(randOptions4)]);
        return types;
      case EStoryLength.NOVELLA:
        types.push([
          PROTAGONIST,
          ANTAGONIST,
          DEUTERAGONIST,
          LOVE_INTEREST,
          selectRandomItem(randOptions3)
        ]);
        return types;
      case EStoryLength.NOVEL:
        types.push([
          PROTAGONIST,
          DEUTERAGONIST,
          selectRandomItem(randOptions3),
          ...duplicateItems(ANTAGONIST, 2),
          ...duplicateItems(LOVE_INTEREST, 2)
        ]);
        return types;
      case EStoryLength.EPIC:
        types.push([
          ...duplicateItems(PROTAGONIST, 2),
          ...duplicateItems(ANTAGONIST, 3),
          ...duplicateItems(DEUTERAGONIST, 3),
          ...duplicateItems(CONFIDANTE, 2),
          ...duplicateItems(FOIL, 2),
          ...duplicateItems(LOVE_INTEREST, 3)
        ]);
        return types;
      default:
        return types;
    }
  }
};

export const generateCharactersList = (type: EStoryLength) => {
  const listOfTypes = generateCharacterTypesList(type)[0];
  // console.log(listOfTypes);
  const listWithGeneratedCharacters = listOfTypes.map((char: any) => ({
    ...char,
    character: characterGenerator()
  }));
  return listWithGeneratedCharacters;
};

/**
 * CHARACTERS
 *
 * 1. Assume for now everything is auto generated
 * 2. Each story length should have a suggested character combination / allocation
 */

/**
 * ALLOCATION
 *
 * FLASH:
 *   - PROTAGONIST
 *   - LOVE_INTEREST || ANTAGONIST || SYMBOLIC
 *
 * SHORT:
 *   - PROTAGONIST
 *   - DEUTERAGONIST || LOVE_INTEREST
 *   - ANTAGONIST || SYMBOLIC
 *
 * NOVELLA:
 *   - PROTAGONIST
 *   - ANTAGONIST
 *   - DEUTERAGONIST
 *   - CONFIDANTE || FOIL
 *   - LOVE_INTEREST
 *
 * NOVEL:
 *   - PROTAGONIST
 *   - ANTAGONIST x n
 *   - DEUTERAGONIST
 *   - CONFIDANTE || FOIL
 *   - LOVE_INTEREST x n
 *
 * EPIC:
 *   - PROTAGONIST x n
 *   - ANTAGONIST x n
 *   - DEUTERAGONIST x n
 *   - CONFIDANTE x n
 *   - FOIL x n
 *   - LOVE_INTEREST x n
 */
