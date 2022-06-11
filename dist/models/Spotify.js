"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SpotifySchema = new _mongoose["default"].Schema({
  type: {
    type: String,
    required: true
  },
  listened_to: {
    type: Date
  },
  song_info: {
    artist: {
      artist_name: {
        type: String,
        required: true
      }
    },
    song_title: {
      type: String,
      required: true
    },
    cover_art: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  },
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  }
});

var Spotify = _mongoose["default"].model('Spotify', SpotifySchema);

var _default = Spotify;
exports["default"] = _default;