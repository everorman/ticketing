import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';
/**
 * Middleware to formatting errors
 * @returns
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serialize() });
  }

  res.status(400).send({
    error: [
      {
        message: err.message,
      },
    ],
  });
};
