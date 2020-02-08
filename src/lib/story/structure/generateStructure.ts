import storyArc from '../../../../json/story_arc_1.json';
import stages from '../../../../json/story_arc_stages.json';
import { generateResponse } from '../structure/generateResponse';
import StoryLengthTypes from '../length/storyLengthTypes';
import { EStructureType, EStoryLength } from '../../../types/enum';

export interface IDefaults {
  sections?: boolean;
  stages?: boolean;
  chapters?: boolean;
  scenes?: boolean;
}

export interface IStructureOptions {
  storyLength: EStoryLength;
  prologue?: boolean;
  epilogue?: boolean;
  applyDefaults: IDefaults;
}

export default (options: IStructureOptions) => {
  const { minWords, maxWords, avChapters } = StoryLengthTypes[options.storyLength];

  const bodyStructureOptions = {
    type: EStructureType.TRADITIONAL,
    prologue: options.prologue || false,
    epilogue: options.epilogue || false,
    maxWords,
    minWords,
    avChapters
  };

  /**
   * @desc if applyDefaults.sections
   */

  const structure = generateResponse(bodyStructureOptions);
  console.log(structure);

  /**
   * @desc if applyDefaults.stages
   */

  const structureWithStages = () => {};

  /**
   * @desc if applyDefaults.chapters
   */

  const structureWithChapters = () => {};

  /**
   * @desc if applyDefaults.scenes
   */

  const structureWithScenes = () => {};

  return stages.map(stage => ({
    ...stage,
    scenes: storyArc.filter(arc => arc.defaultStage === stage.stage)
  }));
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
 * SECTION  ==> generateResponse('TRADITIONAL')
 * STAGE    ==> apply DEFAULT STAGES to TRADITIONAL?
 * CHAPTERS ==> apply chapter spread evenly?
 * SCENE    ==> apply DEFAULT SCENES to STAGES
 */
