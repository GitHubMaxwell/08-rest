'use strict';

const superagent = require('superagent');
const app = require('../src/app.js');

describe('API MODULE', () => {

  beforeAll( () => {
    app.start(8080);
  });
  
  afterAll( () => {
    app.stop();
  });
  
  it('GET: test 404, it should respond with not found for valid requests made with an id that was not found', () => {

    return superagent.get('/api/v1/max')
      .catch(err => {
        console.log(err);
        expect(err.statusCode).toEqual(404);
        expect(err.statusMessage).toEqual('not found');
      });
  
  });
  
  it('GET: test 400, it should respond with bad request if no id was provided in the request', () => {

    return superagent.get('/api/v1/max')
    //   .then(res => {
    //     // console.log(res);
    //     expect(res.statusCode).toEqual(200);
    //     expect(res.body).toBeDefined();
    //   })
      .catch(err => {
        console.log(err);
        expect(err.statusCode).toEqual(400);
        expect(err.statusMessage).toEqual('bad request');
      });
  
  });
  
  it('GET: test 200, it should contain a response body for a request made with a valid id', () => {

    return superagent.get('/api/v1/max?id=max')
      .then(res => {
        console.log(res);
        expect(res.statusCode).toEqual(200);
        // expect(res.body).toBeDefined();
      })
      .catch(err => {
        console.log(err);
        expect(err.statusCode).toEqual(400);
        expect(err.statusMessage).toEqual('bad request');
      });

  
  });
  
  it('POST: test 400, it should respond with bad request if no request body was provided or the body was invalid', () => {

    return superagent.post('/api/v1/max')
    //   .send()
      .catch(err => {
        // console.log(err);
        expect(err.statusCode).toEqual(400);
        expect(err.statusMessage).toEqual('bad request');
      });
    
  });
  
  it('POST: test 200, it should respond with the body content for a post request with a valid body', () => {

    return superagent.post('/api/v1/max')
      .send({cool:'beans'})
      .then(res => {
        // console.log(res.body);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
      });
  });

  it('DELETE: test 200, it should respond with the body content for a post request with a valid body', () => {

    return superagent.delete('/api/v1/max?id=max')
      .then(res => {
        // console.log(res.body);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('ID: max was deleted');
      });
  });
});