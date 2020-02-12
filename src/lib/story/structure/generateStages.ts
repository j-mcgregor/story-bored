import stagesList from '../../../data/literature/stages.json';
import { ISection } from '../../../types';

export const generateStages = (sections: ISection[]): ISection[] => {
  return sections.map((section: ISection) => {
    switch (section.name) {
      case 'beginning':
        return {
          ...section,
          stages: stagesList.filter(s => s.storyOrder <= 2)
        };
      case 'middle':
        return {
          ...section,
          stages: stagesList.filter(s => s.storyOrder > 2 && s.storyOrder <= 6)
        };
      case 'end':
        return {
          ...section,
          stages: stagesList.filter(s => s.storyOrder > 6)
        };
      default:
        return { ...section, stages: [] };
    }
  });
};
