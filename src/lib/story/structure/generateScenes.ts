import { ISection, IScene } from '../../../types';
import scenes from '../../../../json/scenes.json';

// return Section[] but with a list of scenes relevant to its place in the story
export const section1Scenes = ['STASIS', 'TRIGGER'];
export const section2Scenes = ['QUEST', 'BOLT', 'SHIFT', 'DEFEAT'];
export const section3Scenes = ['POWER', 'RESOLUTION'];

export const sortScenes = (arr: IScene[]) => {
  const section1 = arr.filter(a => section1Scenes.includes(a.defaultStage));
  const section2 = arr.filter(a => section2Scenes.includes(a.defaultStage));
  const section3 = arr.filter(a => section3Scenes.includes(a.defaultStage));

  return [section1, section2, section3];
};

export const generateScenes = (sections: ISection[]): ISection[] => {
  return sections.map(section => {
    const copiedScenes = [...scenes];

    const [section1, section2, section3] = sortScenes(copiedScenes);

    switch (section.name) {
      case 'beginning':
        return {
          ...section,
          scenes: section1
        };
      case 'middle':
        return {
          ...section,
          scenes: section2
        };
      case 'end':
        return {
          ...section,
          scenes: section3
        };
      default:
        return { ...section, scenes: [] };
    }
  });
};
