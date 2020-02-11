import stagesList from '../../../../json/stages.json';
import { ISection } from '../../../types';

export const generateStages = (sections: ISection[]): ISection[] => {
  return sections.map((sect: ISection) => {
    switch (sect.name) {
      case 'beginning':
        return {
          ...sect,
          stages: stagesList.filter(s => s.storyOrder <= 2)
        };
      case 'middle':
        return {
          ...sect,
          stages: stagesList.filter(s => s.storyOrder > 2 && s.storyOrder <= 6)
        };
      case 'end':
        return {
          ...sect,
          stages: stagesList.filter(s => s.storyOrder > 6)
        };
      default:
        return { ...sect, stages: [] };
    }
  });
};
