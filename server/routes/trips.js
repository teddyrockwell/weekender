const { Users, Trips } = require('../db'); // do i need trips? prob not 
const { Router } = require('express');
const AddingTrip = Router();
// const express = require('express');
// const app = express();

AddingTrip.get('/trips/:id', (req, res) => {
  // console.log('Received GET request for /trips/');
  const { id } = req.params;
  // console.log(req.params, "test params");
  // console.log(googleId)
  Users.find({googleId: id})
    .then((user) => {
      if (user) {
        console.log(user);
        res.status(200).send(user);
      } else {
        console.log('User not found');
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error('Failed to GET User:', err);
      res.sendStatus(500);
    });
});

AddingTrip.post('/trips/:id', (req, res) => {
  // console.log('Received GET request for /trips/');
  const { id } = req.params;

  // console.log(req.params, "test params");
  // console.log(googleId)
  // console.log(req.body, "this is the body");

  Trips.create(req.body.data)
    .then((trip) => {
      // Add the new trip's ID to the user's tripsIds array
      Users.findOneAndUpdate({googleId: id}, {$push: {tripsIds: trip._id}}, {new: true})
        .then((user) => {
          console.log(user);
          res.status(201).send(trip);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Failed to update user');
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Failed to create trip');
    });


});

/*
const TripSchema = new mongoose.Schema({
    dateStart: String,
    dateEnd: String,
    campsiteImg: String,
    campsiteName: String,
    campsiteDesc: String,
    packingList: [String],
    weatherId: String
});
*/

module.exports = AddingTrip;