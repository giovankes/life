import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('lmao');
});

app.listen(5000, () => {
  console.log('app is listening on port 5000');
});
