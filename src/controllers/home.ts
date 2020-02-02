import { Request, Response } from 'express';

/**
 * @method GET
 * @path /
 * @desc Get all routes in JSON format
 */

export const index = (req: Request, res: Response) => {
  res.json({
    story: {
      prompts: 'http://localhost:3000/api/story/prompts'
    }
  });
};
