import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  log: {
    ip: String,
    route: String,
    time: Date,
    was_finished: Boolean,
  },
});

const Log = mongoose.model('Log', LogSchema);

export default Log;
