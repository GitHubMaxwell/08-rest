//export a promise that takes in the req
//create a custom parser module that:
// uses promises to parse the JSON body of POST and PUT requests
// uses the NodeJS url and querystring modules to parse the request url

// what this parser is doing is turning th erequest into a super powered request
//its doing that by taking in the 

'use strict';

const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {
  //we are exporting a function that takes in the request object and returns a promise
  return new Promise((resolve,reject) => {
    //handle error right away
    // if(!req || req.url) {
    if(!(req || req.url)) {
      reject('Invalid Request Object. Cannot Parse');
    }
    // req.url = http://localhost:3000/api/v1/notes?id=12345
    // console.log('PRE PARSE URL',req.url);
    req.parsed = url.parse(req.url);
    // console.log('POST PARSE URL',req.parsed);

    ////////it modifies the request object to have req.parsed key
    //and thereby have req.parsed.pathname
    /*
        req.parsed = {
          pathname: '/api/vi/notes',
          query: '?id=12345&name=John',
        }
       */
    // console.log('PRE PARSE QUERY',req);
    req.query = queryString.parse(req.parsed.query);
    // console.log('POST PARSE QUERY',req.query);
    /*
        req.query = {
          id:12345,
          name:'John'
        }
       */

    if(! req.method.match(/POST|PUT/) ) {
      //if the request method DOESNT equal onf of these methods resolve it with the url and query already being parsed out
      console.log('CHECKING THE GETs GOING HERE',req.method);
      resolve(req);
    }
    // console.log('BODY before JSON parse', req.body);
    let text = '';
  
    req.on('data', (buffer) => {
      text += buffer.toString();
    });
  
    req.on('end', () => {
      try{
        req.body = JSON.parse(text);
        resolve(req);
        // console.log('BODY after JSON parse', req.body);
      }
      catch(err) { reject(err); }
    });
    req.on('err', reject);
  });
};