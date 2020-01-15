<<<<<<< HEAD
const cmd = require('chronos-microservice-debugger3');
=======
// UNCOMMENT THE LINES BELOW
// const cmd = require('chronos-microservice-debugger3');
// cmd.propagate();
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e

const PORT = 7777;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
<<<<<<< HEAD

const PORT = 7777;
//  we're using the chronos debugger tool here to intercept
//  request and propagate our context onto said request as it travels
// app.use('/', cmd.microCom('orders_microservice', 'sql', 'postgres://tsfcbdjo:l8AWzEJEyhxtR-ERoj7HNjIqBuRCqm9f@rajje.db.elephantsql.com:5432/tsfcbdjo'));
// cmd.microHealth('orders_microservice', 'sql', 'postgres://tsfcbdjo:l8AWzEJEyhxtR-ERoj7HNjIqBuRCqm9f@rajje.db.elephantsql.com:5432/tsfcbdjo', 'h');
=======
const controller = require('./OrderController.js');
 
// UNCOMMENT THE LINE BELOW AND PASS IN YOUR CHOSEN ARGUMENTS
// app.use('/', cmd.microCom('microserviceName', 'databaseType', 'databaseURL', 'wantMicroHealth', 'queryFrequency'))
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e

// app.use('/', cmd.microCom('microserviceName', 'databaseType', 'databaseURL', 'wantMicroHealth', 'queryFrequency'));
app.use('/', cmd.microCom('orders_microservice', 'sql', 'postgres://kpbljbrv:Ry1hO5KPIU-jvVyGnHHne-yplDr2Yk3H@rajje.db.elephantsql.com:5432/kpbljbrv', 'yes', 'm'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

<<<<<<< HEAD
// CHAOS FLOW
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


// Create an Order through this endpoint
=======
// This route will create a new order
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
app.post('/orders/createorder', controller.createorder, (req, res) => {
  res.status(200).json(res.locals.createorder);
});

<<<<<<< HEAD
// Get all orders through this endpoint
app.get('/orders/getorders', controller.getorders, (req, res) => res.status(200).json(res.locals.getorders));

// Delete order through this endpoint
=======
// This route will get all the orders
app.get('/orders/getorders', controller.getorders, (req, res) => {
  res.status(200).json(res.locals.getorders);
});

// This route will delete an order
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
app.delete('/orders/deleteorder:id?', controller.deleteorder, (req, res) => {
  res.status(200).json(res.locals.deletecustomer);
});

<<<<<<< HEAD
// Get customer info from the customers application with this endpoint
app.get('/orders/getcustomersinfo', controller.fetchcustomerdata, (req, res) => {
  //  console.log(`This is the outgoing response ${JSON.stringify(res.locals.customerdata)}`);
=======
// This route will retrieve all the customers from the customers database
app.get('/orders/getcustomersinfo', controller.fetchcustomerdata, (req, res) => {
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
  res.status(200).json((res.locals.customerdata));
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
  console.log(`Orders server running on port ${PORT}...`);
});