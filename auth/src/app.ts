import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import 'express-async-errors';

import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import { currentUserRouter } from './router/current-user';
import { signinRouter } from './router/signin';
import { signoutRouter } from './router/signout';
import { signupRouter } from './router/signup';

const app = express();
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false, // This must be set true to work with https
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
