import mongoose from 'mongoose';
import consola from 'consola';

import User from './User.js';
import Log from './Log.js';

const models = { User, Log };

function connect_to_db() {
  consola.info('connected to database');
  return mongoose.connect(process.env.URI);
}

export { connect_to_db };

export default models;
