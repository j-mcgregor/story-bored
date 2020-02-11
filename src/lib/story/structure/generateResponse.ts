import { ISection, IChapter, IBodyStructureType } from '../../../types';
import { EStructureType } from '../../../types/enum';
import { calcWordsPerSection } from '../helpers';
import { chunk } from 'lodash';

/**
 * @func: Function to generate the response body depending on input from the Head
 * @returns array of sections
 */

export const generateResponse = ({
  type,
  prologue = false,
  epilogue = false,
  maxWords,
  minWords,
  avChapters
}: IBodyStructureType) => {
  switch (type) {
    case EStructureType.TRADITIONAL:
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
