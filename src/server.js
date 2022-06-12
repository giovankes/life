import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import consola from 'consola';

const app = express();

app.use(
  express.json({
    limit: '100mb',
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// NOTE: * Routes * //
//connectDb().then(async () => {
//  app.listen(PORT || 261120, () => {
//    consola.info(`app is listening on port: ${PORT}`);
//  });
//});

app.listen(process.env.PORT, () => {
  consola.info(`app is listening on port: ${process.env.PORT}`);
});
