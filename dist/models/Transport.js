"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TransportSchema = new _mongoose["default"].Schema({
  type: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  submitted_at: {
    type: Date
  },
  company: {
    type: String,
    required: true
  },
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  }
});

var Transport = _mongoose["default"].model('Transport', TransportSchema);

var _default = Transport;
exports["default"] = _default;