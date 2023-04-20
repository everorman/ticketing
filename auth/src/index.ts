import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';

import { currentUserRouter } from './router/current-user';
import { signinRouter } from './router/singin';
import { signoutRouter } from './router/singout';
import { signupRouter } from './router/singup';
import { errorHandler } from './moddlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to mongodb');
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!');
  });
};

start();
