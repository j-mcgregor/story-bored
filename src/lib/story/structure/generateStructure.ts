import { generateSections } from '../structure/generateSections';
import StoryLengthTypes from '../length/storyLengthTypes';
import { EStructureType } from '../../../types/enum';
import { IStructureOptions, ISection } from '../../../types';
import { generateStages } from './generateStages';
import { generateChapters } from './generateChapters';
import { generateScenes } from './generateScenes';

/**
 * Defaults is so it no options get passed through, they'll appear as default
 */
const defaults = {
  sections: true,
  stages: true,
  chapters: true,
  scenes: true,
  nested: true // nested is to spread the stages / chapters / scenes across the sections
};

/**
 * @func generateStructure
 * @param StructureOptions = { applyDefaults = defaults, storyLength, epilogue, prologue }
 */

export default ({
  applyDefaults = defaults,
  storyLength,
  prologue = false,
  epilogue = false
}: IStructureOptions): ISection[] => {
  const { minWords, maxWords, avChapters } = StoryLengthTypes[storyLength];
  const { nested } = applyDefaults;
  const isTooShort = storyLength === 'FLASH' || storyLength === 'SHORT';

  const bodyStructureOptions = {
    type: EStructureType.TRADITIONAL,
    prologue: prologue || false,
    epilogue: epilogue || false,
    maxWords,
    minWords,
    avChapters
  };

  let sections = generateSections(bodyStructureOptions);

  /**
   * @desc if applyDefaults.stages
   */

  if (applyDefaults.stages && !isTooShort) {
    sections = generateStages(sections);
  }

  /**
   * @desc if applyDefaults.chapters
   * @note not applicable to FLASH or SHORT STORIES
   */

  if (applyDefaults.chapters && !isTooShort) {
    sections = generateChapters(avChapters, sections, nested);
  }
  /**
   * @desc if applyDefaults.scenes
   */

  if (applyDefaults.scenes && !isTooShort) {
    sections = generateScenes(sections, nested);
  }

  return sections;
};
