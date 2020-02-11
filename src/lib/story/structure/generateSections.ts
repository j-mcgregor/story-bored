import { EStructureType } from '../../../types/enum';

/**
 * @func: Function to generate basic story sections
 * @returns array of sections
 */

export interface IBodyStructureType {
  type: EStructureType;
  prologue?: boolean;
  epilogue?: boolean;
}

export interface ISection {
  section: number;
  name: string;
}
export const generateSections = ({ type, prologue = false, epilogue = false }: IBodyStructureType) => {
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
       * @desc PROLOOGUE / EPILOGUE COUNT AS STANDALONE CHAPTERS
       */

      if (prologue) {
        base.unshift({ section: 0, name: 'prologue' });
      }
      if (epilogue) {
        base.push({ section: prologue ? base.length : base.length + 1, name: 'epilogue' });
      }

      return base;
    default:
      return [];
  }
};
