'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

//////////////////////////////////////////////////////
router.routes = {};
//////////////////////////////////////////////////////

//make a key of routes that will hold all the specific routes
const methods = ['GET','PUT','POST','DELETE','PATCH'];

methods.forEach( (method) => {

  router.routes[method] = {};

  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };
  // console.log(router.routes);
});

//////////////////////////////////////////////////////
router.route = (req,res) => { 
  //called by the httpServer(router.route)

  return parser(req)
  //error might be in the parser

    .then(req => {
      // console.log(req);
      // Determine which of the things in the routing table matches us
      // i.e. if the request is for http://localhost/foo
      // We would look for this:  router.routes.GET['/foo'] and then run the function that's assigned
      let handler = router.routes[req.method][req.parsed.pathname];
      // If we have one, run the function contained within
      if (handler) {
        return handler(req,res);
        //whats this handler function / where is it ???????
      }
    })
  // Otherwise, bug out with an error
    .catch( () => {
      res.statusCode = 400;
      res.statusMessage = 'Not Found';
      res.write(`Resource Not Found (${req.parsed.pathname})`);
      res.end();
    });
  
};