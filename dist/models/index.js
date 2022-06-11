"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _consola = _interopRequireDefault(require("consola"));

var _User = _interopRequireDefault(require("./User.js"));

var _Transport = _interopRequireDefault(require("./Transport.js"));

var _Spotify = _interopRequireDefault(require("./Spotify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var models = {
  User: _User["default"],
  Transport: _Transport["default"],
  Spotify: _Spotify["default"]
};

var connectDb = function connectDb() {
  _consola["default"].info('connected to database');

  return _mongoose["default"].connect(process.env.URI);
};

exports.connectDb = connectDb;
var _default = models;
exports["default"] = _default;