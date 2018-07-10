'use strict';

let parser = require('../../src/lib/parser.js');

describe('URL Parser', () => {

  xit('requires a request object', () => {
    let req = undefined;
    
    return parser(req)
      // .then( () => false )
      .catch( err => {
        // console.log('Error',err);
        expect(err).toBeDefined(); 
      });
  });

  xit('requires a req object with a url', () => {
    let req = {};
    return parser(req)
      // .then( () => false )
      .catch( err => expect(err).toBeDefined() );
  });

  xit('given a url returns an object', () => {
    let req = { url: 'http://localhost', method: 'post' };
    return parser(req)
      .then( request => expect(typeof request.url).toEqual('string') );
    // .catch( () => false );
  });

  xit('given a complicated url, does all the things', () => {
    let req = { method:'GET', url: 'http://localhost?a=b&c=d' };
    return parser(req)
      .then( request => {
        expect(request.query.a).toEqual('b'); //DANGER
        expect(request.query.c).toEqual('d');
        //fix the req stuff but console log out the req object / dont need the url
      });
    // .catch( console.log('Error') );
  });
});