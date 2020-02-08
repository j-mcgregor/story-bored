import { IPromptWithCategory } from '../../textAnalysis/analyseText';
import { EGenres } from '../../../types/enum';
import _ from 'lodash';
import { selectRandomItem } from '../helpers';

/**
 *
 * @func promptsByGenre
 * @param arr1 => categories assigned to the prompt
 * @param arr2 => categories chosen by the user
 * @param specific => option to match the user choices exactly
 * @desc returns a random prompt if list contains a specific character
 */

export const promptsByGenre = (arr1: IPromptWithCategory[], arr2: EGenres[], specific: boolean): string => {
  if (specific) {
    const promptsWithXGenres = arr1
      .filter(p => p.categories.length === arr2.length)
      .filter(p => _.isEqual(_.sortBy(p.categories), _.sortBy(arr2)));

    return selectRandomItem(promptsWithXGenres);
  } else {
    const result = arr1.filter(p => p.categories.some((c: EGenres) => arr2.includes(c)));
    return selectRandomItem(result);
  }
};
