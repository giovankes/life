"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db_insert = db_insert;
exports.db_insert_many = db_insert_many;

var _mongodb = require("mongodb");

var _consola = _interopRequireDefault(require("consola"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _mongodb.MongoClient(process.env.URI, {
  useUnifiedTopology: true
});
var connect = client.connect();
var dbo = client.db('nima');

function db_insert(collection, data) {
  connect.then(function () {
    dbo.collection(collection).insertOne(data, function (err) {
      if (err) throw err;

      _consola["default"].info('data successfully inserted');
    });
  });
}

function db_insert_many(collection, data) {
  connect.then(function () {
    dbo.collection(collection).insertMany(data, function (err) {
      if (err) throw err;

      _consola["default"].info('successfully inserted data');
    });
  });
}