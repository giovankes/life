import express from 'express';
import bodyParser from 'body-parser';
import WebSocket from 'ws';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

require('events').EventEmitter.defaultMaxListeners = 15;

dotenv.config();

const app = express();

const { uri } = process.env;

const urlencodedParser = bodyParser.urlencoded({
  extended: true,
});

const jsonParser = bodyParser.json();

const wss = new WebSocket.Server({
  port: 2611,
});

app.use(
  express.json({
    limit: '100mb',
  })
);

const server = app.listen(8082, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('express server started at: http://%s:%s', host, port);
});

// handles websockets for inserting data

const clients = new Map();

wss.on('connection', (wss, request, client) => {
  clients.set(wss);
  wss.on('message', (data) => {
    const message = JSON.parse(data);

    // insert message
  });
});
