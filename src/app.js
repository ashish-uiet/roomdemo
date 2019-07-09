const express = require("express");
const app= express();
const cors = require('cors');
const bodyParser= require('body-parser');
const http = require('http');
//Routes
const room = require('./routers/room');

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/room", room);
const server = http.createServer(app);
module.exports = server;