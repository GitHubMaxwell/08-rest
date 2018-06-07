'use strict';

const dotenv = require('dotenv').config();

const server = require('./src/app.js');

server.start( dotenv, () => {
  console.log(`Server is up on PORT: ${dotenv}`);
});