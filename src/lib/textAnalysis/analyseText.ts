import { keywords } from './genre';
import prompts from '../../../json/writing_prompts.json';

interface IPrompt {
  prompt: string;
}

export interface IPromptWithCategory {
  prompt: string;
  categories: string[];
}

const isPresent = (category: string, text: string) =>
  keywords[category].some((v: string) => text.includes(v));
const pushToCategories = (arr: string[], item: string) => arr.push(item);

export default () => {
  const promptsWithCategories: IPromptWithCategory[] = prompts.map(
    (p: IPrompt): IPromptWithCategory => {
      const promptWithCategory: IPromptWithCategory = { prompt: p.prompt, categories: [] };
      const { categories } = promptWithCategory;
      const lowerCasePrompt = p.prompt.toLowerCase();

      if (isPresent('sciFi', lowerCasePrompt)) pushToCategories(categories, 'SCIFI');
      if (isPresent('crime', lowerCasePrompt)) pushToCategories(categories, 'CRIME');
      if (isPresent('horror', lowerCasePrompt)) pushToCategories(categories, 'HORROR');
      if (isPresent('fantasy', lowerCasePrompt)) pushToCategories(categories, 'FANTASY');
      if (isPresent('romance', lowerCasePrompt)) pushToCategories(categories, 'ROMANCE');
      if (isPresent('religious', lowerCasePrompt)) pushToCategories(categories, 'RELIGIOUS');
      if (isPresent('historical', lowerCasePrompt)) pushToCategories(categories, 'HISTORICAL');
      if (isPresent('inspiration', lowerCasePrompt)) pushToCategories(categories, 'INSPIRATION');

      return promptWithCategory;
    }
  );

  return promptsWithCategories;
};
