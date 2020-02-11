import { ECharacterType, EStructureType, EGenres, EStoryLength, EStages } from './enum';

/**
 * @desc STRUCTURE
 */

export interface IStructure {
  type: EStructureType;
  prologue?: boolean;
  epilogue?: boolean;
}

export interface IStructureDefaults {
  sections?: boolean;
  stages?: boolean;
  chapters?: boolean;
  scenes?: boolean;
}

export interface IStructureOptions {
  storyLength: EStoryLength;
  prologue?: boolean;
  epilogue?: boolean;
  applyDefaults: IStructureDefaults;
}

export interface ISection {
  section: number;
  name: string;
  stages?: IStage[]; // stage can have chapters and scenes
  chapters?: IChapter[]; // chapter can have scenes
  scenes?: IScene[]; // scene can have chapters
  avMinWordsPerSection?: number;
  avMaxWordsPerSection?: number;
  avChaptersPerSection?: number;
}

export interface IStage {
  stage: string;
  summary: string;
  storyOrder: number;
  plottingOrder: number;
  chapters?: IChapter[]; // chapter can have scenes
  scenes?: IScene[]; // scene can have chapters
}

export interface IChapter {
  chapter: number;
  avMinWordsPerChapter?: number;
  avMaxWordsPerChapter?: number;
  scenes?: IScene[]; // scene can have chapters
}

export interface IScene {
  defaultStage: string;
  defaultScene: number;
  description: string;
}

/**
 * @desc CHARACTERS
 */

export interface ICharacter {
  name: string;
  category: ECharacterType;
  roleDescription?: string;
  characterDescription?: string;
}

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
 * @desc LENGTH
 */

export interface IStoryLength {
  name: string;
  minWords: number;
  maxWords: number;
  avChapters: number;
  suggestions?: string[];
}

/**
 * @desc PLOT
 */

export interface IPlot {
  plot: string;
  definition: string;
  example: string;
}

/**
 * @desc MAIN RESPONSE
 */

export interface IOptions {
  genres: EGenres[];
  genreSpecific: boolean;
  structure: IStructure;
  length: EStoryLength;
  characters: boolean;
  prompts: boolean;
}

export interface IHead {
  genres?: EGenres[];
  genreSpecific?: boolean;
  structure?: IStructure;
  length?: IStoryLength;
  characters?: ICharacterDesc[];
  prompts?: string;
}

export interface IBodyStructureType {
  type: EStructureType;
  prologue?: boolean;
  epilogue?: boolean;
  maxWords?: number;
  minWords?: number;
  avChapters: number;
}
