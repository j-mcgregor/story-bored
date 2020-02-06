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
  type: StructureType;
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

/**
 * @type ENUM
 */

export enum StructureType {
  TRADITIONAL = 'TRADITIONAL'
}

export enum EStoryLength {
  FLASH = 'FLASH',
  SHORT = 'SHORT',
  NOVELLA = 'NOVELLA',
  NOVEL = 'NOVEL',
  EPIC = 'EPIC'
}

export enum EGoodness {
  GOOD = 'GOOD',
  EVIL = 'EVIL',
  SECRET_GOOD = 'SECRET_GOOD',
  SECRET_EVIL = 'SECRET_EVIL',
  TRANSFORMED_GOOD = 'TRANSFORMED_GOOD',
  TRANSFORMED_EVIL = 'TRANSFORMED_EVIL'
}

export enum ECharacterType {
  PROTAGONIST = 'PROTAGONIST',
  ANTAGONIST = 'ANTAGONIST',
  DEUTERAGONIST = 'DEUTERAGONIST',
  TERTIARY = 'TERTIARY',
  CONFIDANTE = 'CONFIDANTE',
  LOVE_INTEREST = 'LOVE_INTEREST',
  FOIL = 'FOIL',
  DYNAMIC_CHANGING = 'DYNAMIC_CHANGING',
  STATIC_UNCHANGING = 'STATIC_UNCHANGING',
  STOCK = 'STOCK',
  SYMBOLIC = 'SYMBOLIC',
  ROUND = 'ROUND'
}

export enum EGenres {
  SCIFI = 'SCIFI',
  CRIME = 'CRIME',
  HORROR = 'HORROR',
  FANTASY = 'FANTASY',
  ROMANCE = 'ROMANCE',
  RELIGIOUS = 'RELIGIOUS',
  HISTORICAL = 'HISTORICAL',
  INSPIRATION = 'INSPIRATION'
}
