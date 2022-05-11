import { MongoClient } from 'mongodb';
import consola from 'consola';
require('dotenv').config({
  path: '../../.env',
});

const { uri } = process.env;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

const connect = client.connect();

const dbo = client.db('nima');

function db_insert(collection, data) {
  connect.then(() => {
    dbo.collection(collection).insertOne(data, (err) => {
      if (err) throw err;
      consola.info('data successfully inserted');
    });
  });
}

function db_insert_many(collection, data) {
  connect.then(() => {
    dbo.collection(collection).insertMany(data, (err) => {
      if (err) throw err;
      consola.info('successfully inserted data');
    });
  });
}

export { db_insert, db_insert_many };
