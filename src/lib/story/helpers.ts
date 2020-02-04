import { StructureType, EStoryLength, IStoryLength, ISection } from '../../types/story';
import { IChapter } from 'story';
import { chunk } from 'lodash';
import storyLengthTypes from './storyLengthTypes';

export const calcWordsPerSection = (
  words: number,
  sections: ISection[],
  { prologue, epilogue }: { prologue: boolean; epilogue: boolean }
) => {
  if (prologue && epilogue) {
    return Math.floor(words / sections.length + 2);
  }
  if (prologue || epilogue) {
    return Math.floor(words / sections.length + 1);
  }
  return Math.floor(words / sections.length);
};

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

      const avChaptersPerSection = Math.floor(avChapters / base.length);
      const avMinWordsPerSection = calcWordsPerSection(minWords, base, { prologue, epilogue });
      const avMaxWordsPerSection = calcWordsPerSection(maxWords, base, { prologue, epilogue });

      const avMinWordsPerChapter = Math.floor(avMinWordsPerSection / avChaptersPerSection);
      const avMaxWordsPerChapter = Math.floor(avMaxWordsPerSection / avChaptersPerSection);

      /**
       * @desc CHAPTERS
       */

      const chapters: IChapter[] = Array.from(Array(avChapters), (x, i) => ({
        chapter: i + 1,
        avMinWordsPerChapter,
        avMaxWordsPerChapter
      }));

      const sectionChapters = chunk(chapters, avChaptersPerSection);
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
