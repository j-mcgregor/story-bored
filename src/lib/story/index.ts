import { IOptions, IHead } from '../../types';
import prompts from '../../../json/writing_prompts.json';
import promptsWithCategories from '../../../json/prompts_with_categories.json';
import { selectRandomItem } from './helpers';
import { promptsByGenre } from './helpers/genreHelpers';
import { generateStoryLength } from './helpers/lengthHelpers';
import { generateCharactersList } from './helpers/characterHelpers';
import { generateResponse } from './structure/generateResponse';

/**
 * @section HEAD
 * @desc Creates the response head
 * @returns interface IHead
 */

export const createHead = (options: IOptions): IHead => {
  const head: IHead = {};

  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<<< GENRES >>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */

  if (options.genres) {
    head.genres = options.genres;
  }

  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<< PROMPTS >>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */

  if (options.prompts) {
    if (!head.genres.length) {
      head.prompts = selectRandomItem(prompts);
    } else {
      if (options.genreSpecific) {
        head.prompts = promptsByGenre(promptsWithCategories, head.genres, true);
      } else {
        head.prompts = promptsByGenre(promptsWithCategories, head.genres, false);
      }
    }
  }
  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<< STRUCTURE >>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */

  if (options.structure) {
    head.structure = {
      type: options.structure.type,
      prologue: options.structure.prologue,
      epilogue: options.structure.epilogue
    };
  }
  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<<< LENGTH >>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */

  if (options.length) {
    head.length = generateStoryLength(options.length);
  }

  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<< CHARACTERS >>>>>>>>>>>>>>> */
  /* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */

  if (options.characters) {
    head.characters = generateCharactersList(options.length);
  }

  return head;
};

/**
 * @section BODY
 * @desc Creates the response body
 * @returns interface IBody ====== TODO ======
 */
export const createBody = (head: IHead) => {
  const bodyOptions = {
    type: head.structure.type,
    prologue: head.structure.prologue,
    epilogue: head.structure.epilogue,
    minWords: head.length.maxWords,
    maxWords: head.length.minWords,
    avChapters: head.length.avChapters
  };

  const structure = generateResponse(bodyOptions);

  return {
    meta: {
      genres: head.genres
    },
    structure
  };
};
