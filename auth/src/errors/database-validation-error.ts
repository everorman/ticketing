import { CustomError } from './custom-error';

export class DatabaseValidationError extends CustomError {
  reason = 'Error connecting to database';
  statusCode = 500;
  constructor() {
    super('Internal database error');
    //Only because we are extending a build in class
    Object.setPrototypeOf(this, DatabaseValidationError.prototype);
  }

  serialize() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
