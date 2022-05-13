import mongoose from 'mongoose';

const TransportSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Transport = mongoose.model('Transport', TransportSchema);

export default Transport;
