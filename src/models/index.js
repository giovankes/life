import mongoose from 'mongoose';
import consola from 'consola';

import User from './User.js';

const models = { User };

function connect_to_db() {
  consola.info('connected to database');
  return mongoose.connect(process.env.URI);
}

export { connect_to_db };

export default models;
