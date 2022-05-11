import mongoose from 'mongoose';

const connectDb = () => {
  return mongoose.connect(process.env.uri);
};

export { connectDb };
