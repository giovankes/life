import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import consola from 'consola';

import models, { connectDb } from './models';

const app = express();
const { PORT } = process.env;

//NOTE: built-in middleware
app.use(
  express.json({
    limit: '100mb',
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//NOTE: custom middleware

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('giovankes'),
  };
  next();
});

connectDb().then(async () => {
  app.listen(PORT || 261120, () => {
    consola.info(`app is listening on port: ${PORT}`);
  });
});
