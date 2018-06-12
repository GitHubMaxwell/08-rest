'use strict';

require('dotenv').config();

// const server = require('./src/app.js');

// server.start( process.env.PORT );

// This will require our "app.js" file and immediately call its 'start' method, sending the port from our .env
require('./src/app.js').start(process.env.PORT);


//we arent storing things here in the form of const because all the work is happening in the expression. we dont need to store it in any variables