import { ICharacterType, ICharacterDesc } from '../../../types';
import { EStoryLength } from '../../../types/enum';
import characterTypes from '../characters/characterTypes';
import { selectRandomItem, duplicateItems } from '../helpers';
import characterGenerator from '../characters/characterGenerator';

/**
 *
 * @func generateCharacterTypesList
 * @param type => ['FLASH', 'SHORT' etc]
 * @desc returns a semi-randomised list of main character types for the story depending on its length
 */

export const generateCharacterTypesList = (type: EStoryLength) => {
  if (Object.values(EStoryLength).includes(type)) {
    const {
      PROTAGONIST,
      ANTAGONIST,
      LOVE_INTEREST,
      DEUTERAGONIST,
      SYMBOLIC,
      CONFIDANTE,
      FOIL
    } = characterTypes;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const types: any[] = [];
    const randOptions1 = [LOVE_INTEREST, ANTAGONIST, SYMBOLIC];
    const randOptions2 = [DEUTERAGONIST, LOVE_INTEREST];
    const randOptions3 = [CONFIDANTE, FOIL];
    const randOptions4 = [ANTAGONIST, SYMBOLIC];

    switch (type) {
      case EStoryLength.FLASH:
        types.push([PROTAGONIST, selectRandomItem(randOptions1)]);
        return types;
      case EStoryLength.SHORT:
        types.push([PROTAGONIST, selectRandomItem(randOptions2), selectRandomItem(randOptions4)]);
        return types;
      case EStoryLength.NOVELLA:
        types.push([PROTAGONIST, ANTAGONIST, DEUTERAGONIST, LOVE_INTEREST, selectRandomItem(randOptions3)]);
        return types;
      case EStoryLength.NOVEL:
        types.push([
          PROTAGONIST,
          DEUTERAGONIST,
          selectRandomItem(randOptions3),
          ...duplicateItems(ANTAGONIST, 2),
          ...duplicateItems(LOVE_INTEREST, 2)
        ]);
        return types;
      case EStoryLength.EPIC:
        types.push([
          ...duplicateItems(PROTAGONIST, 2),
          ...duplicateItems(ANTAGONIST, 3),
          ...duplicateItems(DEUTERAGONIST, 3),
          ...duplicateItems(CONFIDANTE, 2),
          ...duplicateItems(FOIL, 2),
          ...duplicateItems(LOVE_INTEREST, 3)
        ]);
        return types;
      default:
        return types;
    }
  }
};

const options = {
  hair: {
    color: true,
    type: true
  },
  eyes: {
    color: true,
    shape: true,
    eyebrows: true
  },
  face: {
    shape: true,
    features: true,
    hair: true,
    mouth: true,
    nose: true
  },
  general: {
    height: true,
    build: true,
    age: true,
    skinType: true,
    skinTone: true
  },
  personality: {
    positive: true,
    negative: true
  }
};

/**
 *
 * @func generateCharactersList
 * @param type => ['FLASH','SHORT'...]
 * @desc maps over the character types and creates a random character profile for each one
 */

export const generateCharactersList = (type: EStoryLength) => {
  const listOfTypes: ICharacterType[] = generateCharacterTypesList(type)[0];
  const listWithGeneratedCharacters: ICharacterDesc[] = listOfTypes.map((type: ICharacterType) => ({
    type,
    character: characterGenerator(options)
  }));
  return listWithGeneratedCharacters;
};
