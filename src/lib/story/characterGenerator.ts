import * as faker from 'faker';
import { selectRandomItem } from './helpers';
import { traits } from './characterFeatures';
import { ICharGeneratorOptions, ICharGenerator } from 'story';
import firstNames from '../../../json/firstNames.json';

/**
 * @func assignItemToObject
 * @param obj an object with a property
 * @param key the property (dynamic)
 * @param arr the array of values
 * @desc dynamic property assignment of random array value
 */

const assignItemToObject = (obj: { [x: string]: string }, key: string | number, arr: string[]) =>
  (obj[key] = selectRandomItem(arr));

/**
 * @func repeatRandomise
 * @param arr
 * @desc returns an array of random length of items from the given array
 * @example ['a','b','c','d','e'] => ['b','b','e','d']
 */

const repeatRandomise = (arr: string[]) => {
  const a: string[] = [];
  for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
    a.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return a;
};

/**
 * @func characterGenerator
 * @param options
 * @desc returns a random character profile
 * @example { name: 'John Doe', description: {...} }
 */

interface IFirstNames {
  [index: string]: string[];
}

export default ({ hair, eyes, face, general, personality }: ICharGeneratorOptions): ICharGenerator => {
  const names: IFirstNames = firstNames;
  const gender: string = Math.random() < 0.5 ? 'female' : 'male';

  const char: ICharGenerator = {
    name: `${selectRandomItem(names[gender])} ${faker.name.lastName()}`,
    gender,
    description: {
      hair: {},
      eyes: {},
      face: {},
      general: {},
      personality: {}
    }
  };

  const { description } = char;

  // <<<<<<<<<<<< HAIR >>>>>>>>>>>>>>>
  if (hair && hair.color) assignItemToObject(description.hair, 'color', traits.hairColor);
  if (hair && hair.type) assignItemToObject(description.hair, 'type', traits.hairTypes);

  // <<<<<<<<<<<< EYES >>>>>>>>>>>>>>>
  if (eyes && eyes.color) assignItemToObject(description.eyes, 'color', traits.eyeColor);
  if (eyes && eyes.shape) assignItemToObject(description.eyes, 'shape', traits.eyeShape);
  if (eyes && eyes.eyebrows) assignItemToObject(description.eyes, 'eyebrows', traits.eyebrows);

  // <<<<<<<<<<<< FACE >>>>>>>>>>>>>>>
  if (face && face.shape) assignItemToObject(description.face, 'shape', traits.facialShape);
  if (face && face.features) assignItemToObject(description.face, 'features', traits.facialFeatures);
  if (face && gender === 'male' && face.hair) assignItemToObject(description.face, 'hair', traits.facialHair);
  if (face && face.mouth) assignItemToObject(description.face, 'mouth', traits.mouthLips);
  if (face && face.nose) assignItemToObject(description.face, 'nose', traits.nose);

  // <<<<<<<<<<<< GENERAL >>>>>>>>>>>>>>>
  if (general && general.build) assignItemToObject(description.general, 'build', traits.build[gender]);
  if (general && general.height) assignItemToObject(description.general, 'height', traits.height);
  if (general && general.age) assignItemToObject(description.general, 'age', traits.age);
  if (general && general.skinTone) assignItemToObject(description.general, 'skinTone', traits.skinTone);
  if (general && general.skinType) assignItemToObject(description.general, 'skinType', traits.skinGeneral);

  // <<<<<<<<<<<< PERSONALITY >>>>>>>>>>>>>>>
  if (personality && personality.positive) {
    description.personality.positive = [...new Set(repeatRandomise(traits.personalityTraits.positive))];
  }
  if (personality && personality.negative) {
    description.personality.negative = [...new Set(repeatRandomise(traits.personalityTraits.negative))];
  }

  return char;
};
