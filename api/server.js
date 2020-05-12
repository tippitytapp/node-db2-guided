const express = require('express');
const helmet = require('helmet');

const fruitsRouter = require('../fruits/fruits-router.js');
const veggiesRouter = require('../veggies/veggies-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/fruits', fruitsRouter);
server.use('/api/veggies', veggiesRouter);

module.exports = server;
