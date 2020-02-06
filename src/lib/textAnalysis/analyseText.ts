import { keywords } from './genre';
import prompts from '../../../json/writing_prompts.json';

interface IPrompt {
  prompt: string;
}

interface IPromptWithCategory {
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

      if (isPresent('sciFi', lowerCasePrompt)) pushToCategories(categories, 'sciFi');
      if (isPresent('crime', lowerCasePrompt)) pushToCategories(categories, 'crime');
      if (isPresent('horror', lowerCasePrompt)) pushToCategories(categories, 'horror');
      if (isPresent('fantasy', lowerCasePrompt)) pushToCategories(categories, 'fantasy');
      if (isPresent('romance', lowerCasePrompt)) pushToCategories(categories, 'romance');
      if (isPresent('religious', lowerCasePrompt)) pushToCategories(categories, 'religious');
      if (isPresent('historical', lowerCasePrompt)) pushToCategories(categories, 'historical');
      if (isPresent('inspiration', lowerCasePrompt)) pushToCategories(categories, 'inspiration');

      return promptWithCategory;
    }
  );

  return promptsWithCategories;
};
