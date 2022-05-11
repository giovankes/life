import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import consola from 'consola';

import { connectDb } from './models';

const app = express();
const { PORT } = process.env;
app.use(
  express.json({
    limit: '100mb',
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDb().then(async () => {
  app.listen(PORT || 261120, () => {
    consola.info(`app is listening on port: ${PORT}`);
  });
});
