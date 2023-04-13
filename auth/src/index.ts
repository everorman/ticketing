import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './router/current-user';
import { signinRouter } from './router/singin';
import { signoutRouter } from './router/singout';
import { signupRouter } from './router/singup';
import { errorHandler } from './moddlewares/error-handler';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(errorHandler);
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
