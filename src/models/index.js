import mongoose from 'mongoose';
import consola from 'consola';

import User from './User.js';
import Transport from './Transport.js';
import Spotify from './Spotify.js';

const models = { User, Transport, Spotify };

const connectDb = () => {
  consola.info('connected to database');
  return mongoose.connect(process.env.URI);
};

export { connectDb };

export default models;
