//what do we need
//we need to require in the parser
//handle the  server routes method and path
//catch any errors

//app is used to fire up the server
//start and stop
'use strict';

let http = require('http');

//the modules we make
const router = require('./lib/router.js');
//router will handling the custom creation of routes and passing them back

// const api = require('./api/api.js');
//why is api being required in here?

let ifRunning = false;
//we'll use this below to preemptively handle a server not running

//open a http server connection using our . itll head over to router.route
//it wants a request listener which is function
//lets check out router
//not just a function

const app = http.createServer(router.route);


module.exports = {
  //exporting an object of two keys START and STOP

  ////when requesting to START the server
  start: (port) => {
    //serving the 
    //what is the shape of the object
    //the shape = each key is holding the value of functions
    if(! ifRunning) {
      //if its not running already app.listen on the designated port and handle an error if there is one
      app.listen( port , (err) => {
        //use
        if (err) {throw err;}
        ifRunning = true;
        //reassign it to true
        console.log(`Server is running on port ${port}`);
      });
    }
    else {
      console.log(`Server is already running`);
    }
  },
  ////when requesting to STOP the server
  stop: () => {
    app.close(()=>{
      ifRunning = false;
      console.log(`Server has been stopped`);
    });
  },
};