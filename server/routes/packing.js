const { Trips } = require('../db');
const { Router } = require('express');
const List = Router();
// const express = require('express');
// const app = express();

List.get('/list/:id', (req, res) => {
  // console.log('Received GET request for /packing/');
  const { id } = req.params;
  Trips.findById(id)
    .then((trip) => {
      if (trip) {
        console.log(trip);
        res.status(200).send(trip);
      } else {
        console.log('Trip not found');
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error('Failed to GET packing list:', err);
      res.sendStatus(500);
    });
});


module.exports = List;