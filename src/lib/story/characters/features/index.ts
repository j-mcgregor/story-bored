import age from './age';
import build from './build';
import eyebrows from './eyebrows';
import eyeColor from './eyeColor';
import eyeShape from './eyeShape';
import facialShape from './facialShape';
import facialHair from './facialHair';
import facialFeatures from './facialFeatures';
import generalAppearance from './generalAppearance';
import hairColor from './hairColor';
import hairColorAlternatives from './hairColorAlternatives';
import hairLength from './hairLength';
import hairTypes from './hairTypes';
import hands from './hands';
import height from './height';
import mouthLips from './mouthLips';
import nose from './nose';
import personalityTraits from './personalityTraits';
import skinGeneral from './skinGeneral';
import skinTone from './skinTone';

interface IDynamicProp {
  [key: string]: string[];
}
interface ITraits {
  age: string[];
  build: IDynamicProp;
  eyebrows: string[];
  eyeColor: string[];
  eyeShape: string[];
  facialShape: string[];
  facialHair: string[];
  facialFeatures: string[];
  generalAppearance: string[];
  hairColor: string[];
  hairColorAlternatives: IDynamicProp;
  hairLength: string[];
  hairTypes: string[];
  hands: string[];
  height: string[];
  mouthLips: string[];
  nose: string[];
  personalityTraits: IDynamicProp;
  skinGeneral: string[];
  skinTone: string[];
}

export const traits: ITraits = {
  age,
  build,
  eyebrows,
  eyeColor,
  eyeShape,
  facialShape,
  facialHair,
  facialFeatures,
  generalAppearance,
  hairColor,
  hairColorAlternatives,
  hairLength,
  hairTypes,
  hands,
  height,
  mouthLips,
  nose,
  personalityTraits,
  skinGeneral,
  skinTone
};
