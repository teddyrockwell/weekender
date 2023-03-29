const { Trips } = require('../db');
const routes = require("express").Router();

routes.get()

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