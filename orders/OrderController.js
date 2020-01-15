const fetch = require('node-fetch');
const OrderModel = require('./OrderModel');

const OrderController = {};

//  This middleware creates a new order
OrderController.createorder = (req, res, next) => {
  const newOrder = {
    customerID: req.body.customerID,
    bookID: req.body.bookID,
    purchaseDate: req.body.purchaseDate,
    deliveryDate: req.body.deliveryDate,
  };

  OrderModel.create(newOrder, (error, results) => {
    if (error) {
      console.log(`Document save to the db failed! ${error}`);
      return res.status(404).json(error);
    }
    res.locals.createorder = results;
    return next();
  });
};

// This middleware gets all the orders
OrderController.getorders = (req, res, next) => {
  OrderModel.find({}, (error, results) => {
    if (error) { 
      console.log(`Document retrieval failed! ${error}`);
      return res.status(404).json(error);
    }
    res.locals.getorders = results;
    return next();
  });
};

// This middleware deletes an order
OrderController.deleteorder = (req, res, next) => {
  const { id } = req.query;
  OrderModel.findOneAndDelete({ _id: id }, (error, result) => {
    if (error) {
      console.log(`Customer deletion was not successful ${error}`);
      return res.status(404).json(error);
    }
    res.locals.deletecustomer = result;
    return next();
  });
};

//  This middleware gets all the customers from the customers database by sending a request to the customers server
OrderController.fetchcustomerdata = (req, res, next) => {
<<<<<<< HEAD
  //  const { body } = req;
  fetch('http://localhost:8080/customers/getcustomers', {
=======
  fetch('http://localhost:5555/customers/getcustomers', {
>>>>>>> 808fe27aa8d697a155c4580065bf3ffe3026aa5e
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((results) => {
      res.locals.customerdata = results;
      return next();
    })
    .catch((error) => {
      console.log(`There was an error in getting customers data ${error}`);
    });
};

module.exports = OrderController;