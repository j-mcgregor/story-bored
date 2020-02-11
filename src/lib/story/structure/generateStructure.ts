import { generateSections } from '../structure/generateSections';
import StoryLengthTypes from '../length/storyLengthTypes';
import { EStructureType } from '../../../types/enum';
import { IStructureOptions, ISection } from '../../../types';
import { generateStages } from './generateStages';
import { generateChapters } from './generateChapters';
import { generateScenes } from './generateScenes';

const defaults = {
  sections: true,
  stages: true,
  chapters: true,
  scenes: true
};

export default ({ applyDefaults = defaults, ...options }: IStructureOptions): ISection[] => {
  const { minWords, maxWords, avChapters } = StoryLengthTypes[options.storyLength];

  const bodyStructureOptions = {
    type: EStructureType.TRADITIONAL,
    prologue: options.prologue || false,
    epilogue: options.epilogue || false,
    maxWords,
    minWords,
    avChapters
  };

  let sections = generateSections(bodyStructureOptions);

  /**
   * @desc if applyDefaults.stages
   */

  if (applyDefaults.stages) {
    sections = generateStages(sections);
  }

  /**
   * @desc if applyDefaults.chapters
   */

  if (applyDefaults.chapters) {
    sections = generateChapters(avChapters, sections);
  }
  /**
   * @desc if applyDefaults.scenes
   */

  if (applyDefaults.scenes) {
    sections = generateScenes(sections);
  }

  return sections;
};

/**
 * 3 Parts to pay attention to:
 *
 * 1 ==> SECTION: [[prologue,] beginning, middle, end [, epilogue]]
 * 2 ==> STAGE: [[STASIS, TRIGGER], [QUEST, BOLT, SHIFT, DEFEAT], [POWER, RESOLUTION]]
 * 3 ==> CHAPTERS
 * 4 ==> SCENES
 *
 */

/**
 * SECTION  ==> generateSections('TRADITIONAL')
 * STAGE    ==> apply DEFAULT STAGES to TRADITIONAL?
 * CHAPTERS ==> apply chapter spread evenly?
 * SCENE    ==> apply DEFAULT SCENES to STAGES
 */
