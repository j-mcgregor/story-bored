'use strict';

import { Response, Request } from 'express';

/**
 * @method GET
 * @path /api
 * @desc List of API examples
 */
export const getApi = (req: Request, res: Response) => {
  res.json({
    title: 'API Examples'
  });
};
