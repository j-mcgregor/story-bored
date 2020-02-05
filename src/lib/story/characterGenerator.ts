import * as faker from 'faker';
import { selectRandomItem } from './helpers';
import traits from './characterFeatures';
import { ICharGeneratorOptions, ICharGenerator } from 'story';

const repeatRandomise = (arr: string[]) => {
  const a: string[] = [];
  for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
    a.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return a;
};

export default (options: ICharGeneratorOptions): ICharGenerator => {
  const char: ICharGenerator = {
    name: `${faker.name.findName()} ${faker.name.lastName()}`,
    description: {
      hair: {},
      eyes: {},
      face: {},
      general: {},
      personality: {}
    }
  };

  if (options.hair) {
    if (options.hair.color) {
      char.description.hair.color = selectRandomItem(traits.hairColor);
    }
    if (options.hair.type) {
      char.description.hair.type = selectRandomItem(traits.hairTypes);
    }
  }

  if (options.eyes) {
    if (options.eyes.color) {
      char.description.eyes.color = selectRandomItem(traits.eyeColor);
    }
    if (options.eyes.shape) {
      char.description.eyes.shape = selectRandomItem(traits.eyeShape);
    }
    if (options.eyes.eyebrows) {
      char.description.eyes.eyebrows = selectRandomItem(traits.eyebrows);
    }
  }

  if (options.face) {
    if (options.face.shape) {
      char.description.face.shape = selectRandomItem(traits.facialShape);
    }
    if (options.face.features) {
      char.description.face.features = selectRandomItem(traits.facialFeatures);
    }
    if (options.face.hair) {
      char.description.face.hair = selectRandomItem(traits.facialHair);
    }
    if (options.face.mouth) {
      char.description.face.mouth = selectRandomItem(traits.mouthLips);
    }
    if (options.face.nose) {
      char.description.face.nose = selectRandomItem(traits.nose);
    }
  }
  if (options.general) {
    if (options.general.height) {
      char.description.general.height = selectRandomItem(traits.height);
    }
    if (options.general.build) {
      char.description.general.build = selectRandomItem(traits.build);
    }
    if (options.general.age) {
      char.description.general.age = selectRandomItem(traits.age);
    }
    if (options.general.skinType) {
      char.description.general.skinType = selectRandomItem(traits.skinGeneral);
    }
    if (options.general.skinTone) {
      char.description.general.skinTone = selectRandomItem(traits.skinTone);
    }
  }

  if (options.personality) {
    if (options.personality.positive) {
      char.description.personality.positive = [
        ...new Set(repeatRandomise(traits.personalityTraits.positive))
      ];
    }
    if (options.personality.negative) {
      char.description.personality.negative = [
        ...new Set(repeatRandomise(traits.personalityTraits.negative))
      ];
    }
  }

  return char;
};
