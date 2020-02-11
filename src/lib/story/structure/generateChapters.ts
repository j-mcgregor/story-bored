import { IChapter } from '../../../types';
import { chunk } from 'lodash';
import { ISection } from '../../../types';
import _ from 'lodash';

/**
 * @return list of sections with chapter property
 */

export const generateChapters = (numberOfChapters: number, sections: ISection[]) => {
  const avChaptersPerSection: number = Math.floor(numberOfChapters / sections.length);

  const chapters: IChapter[] = Array.from(Array(numberOfChapters), (x, i) => ({
    chapter: i + 1
  }));

  const sectionChapters: IChapter[][] = chunk(chapters, avChaptersPerSection);

  const newSections = sections.map(s => {
    switch (s.name) {
      case 'beginning':
        return {
          ...s,
          chapters: sectionChapters[0]
        };
      case 'end':
        return {
          ...s,
          chapters: sectionChapters[sectionChapters.length - 1]
        };
      case 'middle':
        return {
          ...s,
          chapters: _.flattenDeep(sectionChapters.slice(1, sectionChapters.length))
        };
      default:
        return {
          ...s,
          chapters: []
        };
    }
  });

  return newSections;
};
