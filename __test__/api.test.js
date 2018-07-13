'use strict';

const superagent = require('superagent');
const app = require('../src/app.js');

describe('API MODULE', () => {

  beforeAll( () => {
    app.start(3002);
  });
  
  afterAll( () => {
    app.stop();
  });
  /*
dont have to put full URL when using supertest just wants everything after the port
  */
  it('GET: test 404, it should respond with "not found" for valid requests made with an id that was not found', () => {
    // we arent persisting anything
    // so we have to set an error in the signin route req.params.id === 'unknown'
    // get with teh query string ?id=unknown to throw the error
    // because there isnt any db to test ths find on
    // return superagent.get('http://localhost:3002/api/v1/max')
    // this was checking if there is NO id NOT a WRONG id
    return superagent.get('http://localhost:3002/api/v1/max?id=unknown')
      .catch(err => {
        // console.log(err);
        // expect(err).toEqual({});
        // console.log(err.message);
        expect(err.status).toEqual(404);
        // on err you only status and message
        // expect(err.statusMessage).toEqual('not found');
        // NOT statusMessage
        // superagent - Error handling
        expect(err.message).toEqual('Not Found');
      });
  });
  
  it('GET: test 400, it should respond with bad request if no id was provided in the request', () => {

    return superagent.get('http://localhost:3002/api/v1/max')
    //   .then(res => {
    //     // console.log(res);
    //     expect(res.statusCode).toEqual(200);
    //     expect(res.body).toBeDefined();
    //   })
      .catch(err => {
        // console.log(err);
        // expect(err.statusCode).toEqual(400);
        expect(err.status).toEqual(400);

        // expect(err.statusMessage).toEqual('bad request');
        expect(err.message).toEqual('Bad Request');
      });
  });
  
  it('GET: test 200, it should contain a response body for a request made with a valid id', () => {

    return superagent.get('http://localhost:3002/api/v1/max?id=max')
    // FORGOT TO PUT HOST NAME in URL
    //otherwise superagent trys to look 
    // superagent doesnt specify base url by default so you have to give it the hostname + uri else it will try to call the /uri as a RELATIVE path
      // .send({cool:'beans'})
      .then(res => {
        // console.log(res);
        // expect(res.statusCode).toEqual(200);
        expect(res.status).toEqual(200);

        // expect(res.body).toBeDefined();
      });
    // .catch(err => {
    //   // console.log(err);
    //   expect(err.statusCode).toEqual(400);
    //   expect(err.statusMessage).toEqual('bad request');
    // });
  });
  
  it('POST: test 400, it should respond with bad request if no request body was provided or the body was invalid', () => {

    return superagent.post('http://localhost:3002/api/v1/max')
    //   .send()
      .catch(err => {
        // console.log(err);
        expect(err.status).toEqual(400);
        expect(err.message).toEqual('Bad Request');
      });
    
  });
  
  it('POST: test 200, it should respond with the body content for a post request with a valid body', () => {

    return superagent.post('http://localhost:3002/api/v1/max?id=max')
    //forgot to put query in url ?id=max
      .send({cool:'beans'})
      .then(res => {
        // console.log(res.body);
        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
      });
  });

  it('DELETE: test 200, it should respond with the body content for a post request with a valid body', () => {

    return superagent.delete('http://localhost:3002/api/v1/max?id=max')
      .then(res => {
        // console.log(res.res.text);
        expect(res.status).toEqual(200);
        expect(res.res.text).toEqual('ID: max was deleted');
      });
  });
});