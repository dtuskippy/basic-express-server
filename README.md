# Lab-02

## Basic Express Server

### Author: Alan Chelko

    * Server testing
    * Middleware testing
    * CI/CD with Github and Heroku

### Setup

    * PORT: 3001

### Deployed Server

    * Heroku: [chelko-basic-express-prod](https://chelko-basic-express-prod.herokuapp.com/)

### Running the app

    * npm start
    * Endpoint: '/'
        * returns 'Hello World'
    * Endpoint: '/bad'
        * returns object with 500 error
    * Endpoint: '/person'
        * returns json object with successful query
        * returns object with 500 error and invalid query message
    * Enpoint: '/*' (i.e. anything other than '/bad' or '/person')
        * returns object with 404 error

### Tests

    * npm test

### UML: CI/CD Process

![CI-CD Process](images/basic-express-server.png)
