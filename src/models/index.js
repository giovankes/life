import mongoose from 'mongoose';
import consola from 'consola';

import User from './User.js';
import Transport from './Transport.js';

const models = { User, Transport };

const connectDb = () => {
  consola.info('connected to database');
  return mongoose.connect(process.env.uri);
};

export { connectDb };

export default models;
