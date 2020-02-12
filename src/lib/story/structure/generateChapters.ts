import { ISection, IChapter, IStage } from '../../../types';
import { flattenDeep, chunk } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const divider = (arr1: any[], arr2: any[]): number => Math.floor(arr1.length / arr2.length);

/**
 * @return list of sections with chapter property
 */

export const generateChapters = (
  numberOfChapters: number,
  sections: ISection[],
  nested: boolean
): ISection[] => {
  const avChaptersPerSection: number = Math.floor(numberOfChapters / sections.length);

  const chapters: IChapter[] = Array.from(Array(numberOfChapters), (x, i) => ({
    chapter: i + 1
  }));

  const sectionChapters: IChapter[][] = chunk(chapters, avChaptersPerSection);

  const createNestedChapters = (arr1: IChapter[], arr2: IStage[]) => {
    const div = divider(arr1, arr2);
    const splitChpt = chunk(arr1, div);
    return arr2.map((st: IStage, i: number) => ({ ...st, chapters: splitChpt[i] }));
  };

  const newSections = sections.map(s => {
    switch (s.name) {
      case 'beginning':
        if (nested) {
          const stages = createNestedChapters(sectionChapters[0], s.stages);

          return { ...s, stages };
        } else {
          return { ...s, chapters: sectionChapters[0] };
        }
      case 'end':
        const last: number = sectionChapters.length - 1;
        if (nested) {
          const stages = createNestedChapters(sectionChapters[last], s.stages);

          return { ...s, stages };
        } else {
          return { ...s, chapters: sectionChapters[last] };
        }
      case 'middle':
        const midChpts = flattenDeep(sectionChapters.slice(1, sectionChapters.length));
        if (nested) {
          const stages = createNestedChapters(midChpts, s.stages);

          return { ...s, stages };
        } else {
          return { ...s, chapters: midChpts };
        }
      default:
        return {
          ...s,
          chapters: []
        };
    }
  });

  return newSections;
};
