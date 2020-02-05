import { Request, Response } from 'express';
import prompts from '../../json/writing_prompts.json';
import { createHead, createBody } from '../lib/story';
import analyseText from '../lib/textAnalysis/analyseText';

/**
 * @method GET
 * @path /api/story/prompts
 * @desc Get all writing prompts
 */

export const getPrompts = (req: Request, res: Response) => {
  res.json(prompts);
};

/**
 * @method POST
 * @path /api/story/create
 * @desc Create a basic structure from options
 */

export const generateStructure = (req: Request, res: Response) => {
  const head = createHead(req.body.options);
  const body = createBody(head);
  res.json({ head, body });
};

export const categorisePrompts = (req: Request, res: Response) => {
  const categorised = analyseText();
  res.json(categorised);
};
