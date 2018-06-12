//requires in router
//router.get('/', (req,res))
'use strict';

const router = require('../lib/router.js');

router.get('/', (req,res)=>{
  res.statusCode = 200;
  res.statusMessage = 'ok';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/max', (req,res)=>{
  res.statusCode = 200;
  res.statusMessage = req.query.id ? `ID: ${req.query.id}` : 'OK';
  // res.write(JSON.stringify(req.body));
  res.end();
});

router.post('/api/v1/max', (req,res)=>{
  res.statusCode = 200;
  res.statusMessage = 'ok';
  let name = req.query.name || '';
  res.write(JSON.stringify(req.body));
  res.end();
});

// make a new route

module.exports = {};