const { Trips } = require('../db');
const { Router } = require('express');
const List = Router();
// const express = require('express');
// const app = express();

List.get('/list/:id', (req, res) => {
  const { id } = req.params;
  Trips.findById(id)
    .then((trip) => {
      if (trip) {
        res.status(200).send(trip);
      } else {
        console.error('Trip not found');
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error('Failed to GET packing list:', err);
      res.sendStatus(500);
    });
});


module.exports = List;