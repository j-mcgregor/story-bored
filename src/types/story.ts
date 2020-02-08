import { ECharacterType, EStructureType, EGenres, EStoryLength } from 'enum';

/**
 * @types INTERFACES
 */

export interface ICharacter {
  name: string;
  category: ECharacterType;
  roleDescription?: string;
  characterDescription?: string;
}

export interface IChapter {
  chapter: number;
  avMinWordsPerChapter?: number;
  avMaxWordsPerChapter?: number;
}

export interface ISection {
  section: number;
  name: string;
  chapters?: IChapter[];
  avMinWordsPerSection?: number;
  avMaxWordsPerSection?: number;
  avChaptersPerSection?: number;
}

export interface IStructure {
  type: EStructureType;
  prologue?: boolean;
  epilogue?: boolean;
}

export interface IOptions {
  genres: EGenres[];
  genreSpecific: boolean;
  structure: IStructure;
  length: EStoryLength;
  characters: boolean;
  prompts: boolean;
}

export interface IStoryLength {
  minWords: number;
  maxWords: number;
  name: string;
  avChapters: number;
  suggestions?: string[];
}

export interface IHead {
  genres?: EGenres[];
  genreSpecific?: boolean;
  structure?: IStructure;
  length?: IStoryLength;
  characters?: ICharacterDesc[];
  prompts?: string;
}

/**
 *
 */

export interface ICharacterType {
  type: string;
  category: string;
  description: string;
  examples: string[];
}

export interface ICharacterDesc {
  type: ICharacterType;
  character?: ICharGenerator;
}

export interface ICharGeneratorOptions {
  hair?: {
    color?: boolean;
    type?: boolean;
  };
  eyes?: {
    color?: boolean;
    shape?: boolean;
    eyebrows?: boolean;
  };
  face?: {
    shape?: boolean;
    features?: boolean;
    hair?: boolean;
    mouth?: boolean;
    nose?: boolean;
  };
  general?: {
    height?: boolean;
    build?: boolean;
    age?: boolean;
    skinType?: boolean;
    skinTone?: boolean;
  };
  personality?: {
    positive?: boolean;
    negative?: boolean;
  };
}

export interface ICharGenerator {
  name: string;
  gender: string;
  description: {
    hair: {
      color?: string;
      type?: string;
    };
    eyes: {
      color?: string;
      shape?: string;
      eyebrows?: string;
    };
    face: {
      shape?: string;
      features?: string;
      hair?: string;
      mouth?: string;
      nose?: string;
    };
    general: {
      height?: string;
      build?: string;
      age?: string;
      skinType?: string;
      skinTone?: string;
    };
    personality: {
      positive?: string[];
      negative?: string[];
    };
  };
}

export interface IBodyStructureType {
  type: EStructureType;
  prologue?: boolean;
  epilogue?: boolean;
  maxWords?: number;
  minWords?: number;
  avChapters: number;
}
