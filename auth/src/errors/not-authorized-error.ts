import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');
    //Only because we are extending a build in class
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serialize() {
    return [
      {
        message: 'Not authorized',
      },
    ];
  }
}