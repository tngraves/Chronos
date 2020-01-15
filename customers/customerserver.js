<<<<<<< HEAD
const cmd = require('chronos-microservice-debugger3');
=======
// UNCOMMENT THE LINES BELOW
// const cmd = require('chronos-microservice-debugger3');
// cmd.propagate();
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e

const PORT = 5555;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./CustomerController.js');

<<<<<<< HEAD
// app.use('/', cmd.microCom('customers_microservice', 'sql', 'postgres://tsfcbdjo:l8AWzEJEyhxtR-ERoj7HNjIqBuRCqm9f@rajje.db.elephantsql.com:5432/tsfcbdjo'));
// cmd.microHealth('customers_microservice', 'sql', 'postgres://tsfcbdjo:l8AWzEJEyhxtR-ERoj7HNjIqBuRCqm9f@rajje.db.elephantsql.com:5432/tsfcbdjo', 'h');
//  app.use('/', cmd.microCom('microserviceName', 'databaseType', 'databaseURL', 'wantMicroHealth', 'queryFrequency'));
app.use('/', cmd.microCom('customers_microservice', 'sql', 'postgres://kpbljbrv:Ry1hO5KPIU-jvVyGnHHne-yplDr2Yk3H@rajje.db.elephantsql.com:5432/kpbljbrv', 'yes', 'm'));
=======
// UNCOMMENT THE LINE BELOW AND PASS IN YOUR CHOSEN ARGUMENTS
// app.use('/', cmd.microCom('microserviceName', 'databaseType', 'databaseURL', 'wantMicroHealth', 'queryFrequency'))
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
<<<<<<< HEAD
app.use('/', express.static(path.resolve(__dirname, '../frontend')));


// eslint-disable-next-line max-len
//  ********** I PROBABLY STILL NEED THIS PART FOR CHRONOS TO WORK AND DEBUG MY MICOSERVICE *************

// CHAOS FLOW - SIMPLY A TEST FOR THE EXPESS SERVER
app.use((req, res, next) => {
  console.log(
    `***************************************************************************************
    CHAOS FLOW TEST --- METHOD:${req.method}, PATH: ${
  req.url
}, BODY: ${JSON.stringify(req.body)}, ID: ${req.query.id}
    ***************************************************************************************`,
  );
  next();
});


// Create a new customer
=======

// This route will create a new customer
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
app.post('/customers/createcustomer', controller.createcustomer, (req, res) => {
  res.status(200).json(res.locals.createcustomer);
});

<<<<<<< HEAD
// List all customers
=======
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
app.get('/customers/getcustomers', controller.getcustomers, (req, res) => {
  res.status(200).json(res.locals.getcustomers);
});

<<<<<<< HEAD
//  Delete a customer with id
=======
//  This route will delete a customer
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
app.delete('/customers/deletecustomer:id?', controller.deletecustomer, (req, res) => {
  res.status(200).json(res.locals.deletecustomer);
});

<<<<<<< HEAD
// Get books information from the books application
app.get('/customers/getbooksinfo', controller.getbooksinfo, (req, res) => {
  //  console.log(`These are the books I got back ${JSON.stringify(res.locals.booksinfo)}`);
=======
// This route will get all the books from the books database
app.get('/customers/getbooksinfo', controller.getbooksinfo, (req, res) => {
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
  res.status(200).json(res.locals.booksinfo);
});

//  This is the global error handler
function errorHandler(error, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, error);
  console.log(`Here is the error object's response: ${errorObj.log}`);
  res.status(errorObj.status).json(errorObj.message);
}

// Open and listen to server on specified port
app.listen(PORT, () => {
  console.log(`Customer server running on port ${PORT}...`);
});
