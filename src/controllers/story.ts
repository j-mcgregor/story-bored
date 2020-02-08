import { Request, Response } from 'express';
import prompts from '../../json/writing_prompts.json';
import { createHead, createBody } from '../lib/story';
import { saveJSON } from '../util/handleFiles';
import analyseText from '../lib/textAnalysis/analyseText';
import getPlotDevice from '../lib/story/plot';
import characterGenerator from '../lib/story/characters/characterGenerator';
import generateStructure from '../lib/story/structure/generateStructure';

/**
 * *******************************************************
 * @method GET
 * @path /api/story/prompts
 * @desc Get all writing prompts
 * *******************************************************
 */

export const getPrompts = (req: Request, res: Response) => {
  res.json(prompts);
};

/**
 * *******************************************************
 * @method POST
 * @path /api/story/create
 * @desc Creates the main response head and body from the options
 * *******************************************************
 */

export const generateResponse = (req: Request, res: Response) => {
  const head = createHead(req.body.options);
  const body = createBody(head);
  res.json({ head, body });
};

/**
 * *******************************************************
 * @method POST
 * @path /api/story/structure
 * @desc Create a basic story structure from options
 * *******************************************************
 */

export const createStoryStructure = (req: Request, res: Response) => {
  const structure = generateStructure(req.body.options);
  res.json({ structure });
};

/**
 * *******************************************************
 * @method GET
 * @path /api/story/analyse
 * @desc Categorises a list of prompts with genres
 * @param save: boolean => svaes the response to the local filesystem
 * *******************************************************
 */

export const categorisePrompts = (req: Request, res: Response) => {
  const categorised = analyseText();
  if (req.query.save === 'true') saveJSON('./json/prompts_with_categories.json', categorised);
  res.json(categorised);
};

/**
 * *******************************************************
 * @method POST
 * @path /api/story/character/create
 * @desc Create a new character from a list of options
 * *******************************************************
 */

export const createCharacter = (req: Request, res: Response) => {
  const character = characterGenerator(req.body.options);
  res.json(character);
};

/**
 * *******************************************************
 * @method GET
 * @path /api/story/plot/device
 * @desc Get a random plot device back
 * @examples MacGuffin, Chekhov's gun, Red herrings etc
 * *******************************************************
 */

export const plotDevice = (req: Request, res: Response) => {
  const device = getPlotDevice();
  res.json(device);
};
