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
  genres: string[];
  structure: IStructure;
  length: EStoryLength;
  characters?: ICharacter[];
}

export interface IStoryLength {
  minWords: number;
  maxWords: number;
  name: string;
  avChapters: number;
  suggestions?: string[];
}

export interface IHead {
  genres?: string[];
  structure?: IStructure;
  length?: IStoryLength;
  characters?: ICharacter[];
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
