const { Trips, Users } = require('../db');
const { Router } = require('express');
const List = Router();
// const express = require('express');
// const app = express();

List.post('/list/:id', (req, res) => {
  const { id } = req.params;
  const { item } = req.body;

  // Check if item already exists in the packing list
  Users.findOne({ googleId: id })
    .then((user) => {
      Trips.findOne({
        _id: user.tripsIds[user.tripsIds.length - 1],
        packingList: { $elemMatch: { item: item.item } }
      })
        .then((existingItem) => {
          if (existingItem) {
            res.status(409).send('dupe');
          } else {
            Trips.findByIdAndUpdate(
              user.tripsIds[user.tripsIds.length - 1],
              { $push: { packingList: item } },
              { new: true }
            )
              .then((trip) => {
                res.status(201).send(trip);
              })
              .catch((err) => {
                console.error(err);
                res.status(500).send('Server error');
              });
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Server error');
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Server error');
    });
});

// List.get('/list/:id', (req, res) => {
//   const { id } = req.params;

//   Users.findOne({ googleId: id })
//     .then((user) => {
//       Trips.findById(user.tripsIds[user.tripsIds.length - 1])
//         .then((trip) => {
//           if (trip) {
//             res.status(200).send({ packingList: trip.packingList });
//           } else {
//             res.sendStatus(404);
//           }
//         })
//         .catch((err) => {
//           res.status(500).send(err);
//         });
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

List.get('/list/:id', (req, res) => {
  const { id } = req.params;
  Users.findOne({ googleId: id })
    .then((user) => {
      Trips.findById(user.tripsIds[user.tripsIds.length - 1])
        .select('packingList')
        .then(trip => {
          const packingListItems = trip.packingList;
          res.status(200).send({ packingList: packingListItems });
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Server error');
        });
    })
    .catch((err) => {
      console.error('Failed to GET User:', err);
      res.sendStatus(500);
    });
});

List.put('/list/:userId/:itemId', (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  const isComplete = req.body.item.isComplete;

  Users.findOne({ googleId: userId })
    .then((user) => {
      Trips.findById(user.tripsIds[user.tripsIds.length - 1])
        .then(trip => {
          trip.packingList.forEach(item => {
            if (item._id == itemId) {
              item.isComplete = isComplete;
            }
          });
          trip.save()
            .then(() => {
              res.sendStatus(200);
            })
            .catch(error => {
              console.error(error);
              res.sendStatus(500);
            });
        })
        .catch(error => {
          console.error(error);
          res.sendStatus(500);
        });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

List.delete('/list/:userId/:itemId', (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;

  Users.findOne({ googleId: userId })
    .then((user) => {
      Trips.findById(user.tripsIds[user.tripsIds.length - 1])
        .then(trip => {
          trip.packingList.pull(itemId);
          trip.save()
            .then(() => {
              res.sendStatus(200);
            })
            .catch(error => {
              console.error(error);
              res.sendStatus(500);
            });
        })
        .catch(error => {
          console.error(error);
          res.sendStatus(500);
        });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = List;