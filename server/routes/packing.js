const { Trips, Users } = require('../db');
const { Router } = require('express');
const List = Router();
// const express = require('express');
// const app = express();

List.post('/list/:id', (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  Users.findOne({ googleId: id })
    .then((user) => {
      Trips.findById(user.tripsIds[user.tripsIds.length - 1])
        .then((trip) => {
          if (trip) {
            if ((item && !trip.packingList.includes(item))) {
              trip.packingList.push(item);
              trip.save()
                .then(() => res.status(201).send(trip))
                .catch((err) => res.status(500).send(err));
            } else {
              res.sendStatus(404)
            }
          } else {
            res.sendStatus(404)
          }
        })
        .catch((err) => {
          res.status(500).send(err)
        })
    })
    .catch((err) => {
      res.status(500).send(err)
    })
});

List.get('/list/:id', (req, res) => {
  const { id } = req.params;

  Users.findOne({ googleId: id })
    .then((user) => {
      Trips.findById(user.tripsIds[user.tripsIds.length - 1])
        .then((trip) => {
          if (trip) {
            res.status(200).send({ packingList: trip.packingList });
          } else {
            res.sendStatus(404);
          }
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});


module.exports = List;