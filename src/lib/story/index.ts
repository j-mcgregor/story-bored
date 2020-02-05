import { IOptions, IHead } from 'story';
import {
  generateStoryLength,
  generateBodyStructure,
  generateCharactersList,
  selectRandomItem
} from './helpers';
import prompts from '../../../json/writing_prompts.json';
// import googleText from '../googleText';

/**
 * @section HEAD
 * @desc Creates the response head
 * @returns interface IHead
 */

export const createHead = (options: IOptions): IHead => {
  const head: IHead = {};

  /* <<<<<<<<<<<<<<<<< GENRES >>>>>>>>>>>>>>>>> */

  if (options.genres) {
    head.genres = options.genres;
  }

  /* <<<<<<<<<<<<<<<<< STRUCTURE >>>>>>>>>>>>>>>>> */

  if (options.structure) {
    head.structure = {
      type: options.structure.type,
      prologue: options.structure.prologue,
      epilogue: options.structure.epilogue
    };
  }

  /* <<<<<<<<<<<<<<<<< LENGTH >>>>>>>>>>>>>>>>> */

  if (options.length) {
    head.length = generateStoryLength(options.length);
  }

  /* <<<<<<<<<<<<<<<<< CHARACTERS >>>>>>>>>>>>>>>>> */

  if (options.characters) {
    head.characters = generateCharactersList(options.length);
  }

  /* <<<<<<<<<<<<<<<<< PROMPTS >>>>>>>>>>>>>>>>> */

  if (options.prompts) {
    head.prompts = selectRandomItem(prompts);
  }

  return head;
};

/**
 * @section BODY
 * @desc Creates the response body
 * @returns interface IBody ====== TODO ======
 */
export const createBody = (head: IHead) => {
  const structure = generateBodyStructure(
    head.structure.type,
    head.structure.prologue,
    head.structure.epilogue,
    head.length.maxWords,
    head.length.minWords,
    head.length.avChapters
  );

  return {
    meta: {
      genres: head.genres
    },
    structure
  };
};
