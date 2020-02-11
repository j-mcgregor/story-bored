import { IStoryLength } from '../../../types';
import { EStoryLength } from '../../../types/enum';
import storyLengthTypes from '../length/storyLengthTypes';

export const generateStoryLength = (type: EStoryLength): IStoryLength => {
  if (Object.values(EStoryLength).includes(type)) {
    switch (type) {
      case EStoryLength.FLASH:
        return storyLengthTypes.FLASH;
      case EStoryLength.SHORT:
        return storyLengthTypes.SHORT;
      case EStoryLength.NOVELLA:
        return storyLengthTypes.NOVELLA;
      case EStoryLength.NOVEL:
        return storyLengthTypes.NOVEL;
      case EStoryLength.EPIC:
        return storyLengthTypes.EPIC;
      default:
        return storyLengthTypes.DEFAULT;
    }
  }
};
