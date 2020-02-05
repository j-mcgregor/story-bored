import { keywords } from './genre';
import prompts from '../../../json/writing_prompts.json';

interface IPrompt {
  prompt: string;
}

interface ICategory {
  sciFi: string[];
  crime: string[];
  romance: string[];
  historical: string[];
  inspirational: string[];
}

interface IPromptWithCategory {
  prompt: string;
  categories: string[];
}

export default () => {
  const promptsWithCategories: IPromptWithCategory[] = prompts.map(
    (p: IPrompt): IPromptWithCategory => {
      const promptWithCategory: IPromptWithCategory = { prompt: p.prompt, categories: [] };
      if (keywords.crime.some(v => p.prompt.includes(v))) {
        promptWithCategory.categories.push('crime');
      }
      if (keywords.sciFi.some(v => p.prompt.includes(v))) {
        promptWithCategory.categories.push('sciFi');
      }
      if (keywords.romance.some(v => p.prompt.includes(v))) {
        promptWithCategory.categories.push('romance');
      }
      if (keywords.historical.some(v => p.prompt.includes(v))) {
        promptWithCategory.categories.push('historical');
      }
      if (keywords.inspirational.some(v => p.prompt.includes(v))) {
        promptWithCategory.categories.push('inspirational');
      }
      return promptWithCategory;
    }
  );

  return promptsWithCategories;
};
