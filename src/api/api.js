'use strict';

const router = require('../lib/router.js');


router.get('/', (req,res)=>{
  res.statusCode = 200;
  res.statusMessage = 'ok';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.post('/data', (req,res)=>{

  if(req.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'ok';
    res.write(JSON.stringify(req.body));
    res.end();
  }
  // } else if(!req.body){
  //   res.statusCode = 400;
  //   res.write('bad request');
  //   res.end();
  // } else {
  //   res.statusCode = 404;
  //   res.write('not found');
  //   res.end();
  // }
});

router.get('/api/v1/max', (req,res) => {

  if(req.query.id) {
    res.statusCode = 200;
    res.statusMessage = req.query.id ? `ID: ${req.query.id}` : 'OK';
    res.write(`ID: ${req.query.id}`);
    res.end();
  
  // you have to end the res-req cycle or itll keep spinning

  // } else if(!req.query.id){
  //   res.statusCode = 404;
  //   res.write('not found');
  //   res.end();
  } else {
    res.statusCode = 400;
    res.write('bad request');
    res.end();
  }
});

router.post('/api/v1/max', (req,res)=>{

  if(req.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'ok';
    res.write(JSON.stringify(req.body));
    res.end();

  } else if(!req.body){
    res.statusCode = 400;
    res.write('bad request');
    res.end();

  }
});

router.put('/api/v1/max', (req,res)=>{

  if(req.query.id) {

    res.statusCode = 200;
    res.statusMessage = 'ok';
    res.write(JSON.stringify(req.body));
    res.end();
  } else {
    res.statusCode = 404;
    res.statusMessage = 'no ID provided';
    res.end();

  }
});

router.delete('/api/v1/max', (req,res)=>{

  if(req.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'ok';
    res.write(`ID: ${req.query.id} was deleted`);
    res.end();
  } else {
    res.statusCode = 404;
    res.statusMessage = 'no ID provided';
    res.end();

  }
});

module.exports = {};