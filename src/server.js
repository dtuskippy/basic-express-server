'use strict';

const express = require('express');
require('dotenv').config();
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
    next('this is a bad route');
});

app.get('/hello', (request, response) => {
  console.log(request.query);
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  response.status(200).send(`Hello ${firstName} ${lastName} from the hello route!`);
});



app.use('*', notFound);

app.use(errorHandler);

function start() {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };
