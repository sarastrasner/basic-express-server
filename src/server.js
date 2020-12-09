'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500.js');
app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

const logRequest = require('./middleware/logger');
app.use(logRequest);
const validateRequest = require('./middleware/validator');

app.get('/person', validateRequest, (req, res) => {
  console.log(req);
  let output = {
    name: req.query
  }
  res.status(200).json(output);
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}

module.exports = {
  server: app,
  start: start
}

