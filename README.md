![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: REST [![Build Status](https://travis-ci.com/GitHubMaxwell/08-rest.svg?branch=max-clean-lab08)](https://travis-ci.com/GitHubMaxwell/08-rest)
======

TRAVIS BADGE: 

* TRAVIS: https://travis-ci.com/GitHubMaxwell/08-rest 
* HEROKU: https://lab08-rest-httpserver.herokuapp.com/ 
* GitHub PR: https://github.com/GitHubMaxwell/08-rest/pull/3

## README

* start the application server with `npm run watch`
* run tests with `npm test`

## Heroku Testing

* GET: fail 404, it should respond with 'not found' for valid requests made with an id that was not found
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max?id=unknown`

* GET: fail 400, it should respond with 'bad request' if no id was provided in the request
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max`

* GET: success 200, it should contain a response body for a request made with a valid id
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max?id=max`

* POST: fail 400, it should respond with 'bad request' if no request body was provided or the body was invalid
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max?id=max`
-- (in body tab > raw / JSON(application/json))    `{"stuff":"other stuff"}`

* POST: pass 200, it should respond with the body content for a post request with a valid body
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max?id=max`
-- dont put anything in the body tag


EXTRA - DELETE Routes

* DELETE pass 200, should return `ID: max was deleted`
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max?id=max`

* DELETE fail 404, should return `no ID provided`
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max`

* PUT pass 200
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max?id=max`
-- -- (in body tab > raw / JSON(application/json))    `{"stuff":"other stuff"}`

* PUT fail 404
-- `https://lab08-rest-httpserver.herokuapp.com/api/v1/max`
-- (in body tab > raw / JSON(application/json))    `{"stuff":"other stuff"}`