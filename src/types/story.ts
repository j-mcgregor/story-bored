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
}

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
