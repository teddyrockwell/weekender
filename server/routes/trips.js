
const { Users, Trips } = require('../db'); // do i need trips? prob not 
const { Router } = require('express');
const AddingTrip = Router();
// const express = require('express');
// const app = express();

AddingTrip.get('/trips/:id', (req, res) => {
  
  const { id } = req.params;

  Users.findOne({googleId: id})
    .then((user) => {
      Trips.findById({ _id: user.tripsIds[0] })
      .then((trip) => {
        res.status(200).send(trip)
      })
    })
    .catch((err) => {
      console.error('Failed to GET Trip:', err);
      res.sendStatus(500);
    });
});

AddingTrip.post('/trips/:id', (req, res) => {
  
  const { id } = req.params;

  Trips.create(req.body.data)
    .then((trip) => {
      // Add the new trip's ID to the user's tripsIds array
      Users.findOneAndUpdate({googleId: id}, {$push: {tripsIds: trip._id}}, {new: true})
        .then((user) => {
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

/*


routes.get('/trips/:id', (req, res) => {
  const { id } = req.params;
  const { packingList } = req.body;
  Trips.findById(id, { packingList })
  .then((list) =>{
    res.status(200).send(list);
  })
  .catch((err) => {
    console.error('Failed to GET packing list:', err);
    res.sendStatus(500);
  })
})


module.exports = routes
*/
