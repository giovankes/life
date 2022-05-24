import mongoose from 'mongoose';

const SpotifySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },

  listened_to: {
    type: Date,
  },
  song_info: {
    artist: {
      artist_name: {
        type: String,
        required: true,
      },
    },
    song_title: {
      type: String,
      required: true,
    },
    cover_art: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Spotify = mongoose.model('Spotify', SpotifySchema);

export default Spotify;
