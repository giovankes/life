import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import consola from 'consola';

import models, { connect_to_db } from './models';
import routes from './routes';
const app = express();

app.use(
  express.json({
    limit: '100mb',
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(async (req, res, next) => {
  req.body = {
    ...req.body,
  };

  req.context = {
    models,
    me: await models.User.findByLogin('giovankes'),
  };
  next();
});

app.use('/users', routes.user);
app.use('/test', routes.test);
app.use('/', routes.root);

connect_to_db().then(() => {
  app.listen(process.env.PORT, () => {
    consola.info(`app is listen on port: ${process.env.PORT}`);
  });
});
