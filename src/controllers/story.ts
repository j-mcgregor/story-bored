import { Request, Response } from 'express';
import prompts from '../../json/writing_prompts.json';

/**
 * @method GET
 * @path /api/story/prompts
 * @desc Get all writing prompts
 */

export const getPrompts = (req: Request, res: Response) => {
  res.json(prompts);
};
