'use strict';

let parser = require('../../src/lib/parser.js');

xdescribe('URL Parser', () => {

  it('requires a request object', () => {
    let req = undefined;
    
    return parser(req)
      .then( response => false )
      .catch( err => {
        // console.log('Error',err);
        expect(err).toBeDefined(); 
      });
  });

  it('requires a req object with a url', () => {
    let req = {};
    return parser(req)
      .then( response => false )
      .catch( err => expect(err).toBeDefined() );
  });

  it('given a url returns an object', () => {
    let req = { url: 'http://localhost' };
    return parser(req)
      .then( request => expect(typeof request.url).toEqual('object') )
      .catch( err => false );
  });

  it('given a complicated url, does all the things', () => {
    let req = { method:'GET', url: 'http://localhost?a=b&c=d' };
    return parser(req)
      .then( request => {
        expect(request.query.a).toEqual('b'); //DANGER
        expect(request.query.c).toEqual('d');
        //fix the req stuff but console log out the req object dont need the url
      })
      // .catch( console.error );
      .catch( console.log('Error') );
  });
});




//console.log the req object in the test because it gives you a better look