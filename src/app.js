'use strict';

let http = require('http');

const router = require('./lib/router.js');

require('./api/api.js');
//why is api being required in here?

let ifRunning = false;

const app = http.createServer(router.route);


module.exports = {

  start: (port) => {
    if(! ifRunning) {
      app.listen( port , (err) => {
        if (err) {throw err;}
        ifRunning = true;
        console.log(`Server is running on port ${port}`);
      });
    }
    else {
      console.log(`Server is already running`);
    }
  },

  stop: () => {
    app.close(()=>{
      ifRunning = false;
      console.log(`Server has been stopped`);
    });
  },
};