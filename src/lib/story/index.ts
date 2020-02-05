import { IOptions, IHead } from 'story';
import { generateStoryLength, generateBodyStructure, generateCharactersList } from './helpers';

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

  if (options.characters && options.characters.length) {
    const chars = generateCharactersList(options.length);
    console.log(chars);
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
