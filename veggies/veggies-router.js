const express = require('express');

const db = require('../data/dbConnection.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('veggies')
  .then(veggies => {
    res.json(veggies); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve veggies' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('veggies').where({ id }).first()
  .then(veggie => {
    res.json(veggie);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve veggie' });
  });
});

router.post('/', (req, res) => {
  const veggieData = req.body;
  db('veggies').insert(veggieData)
  .then(ids => {
    db('veggies').where({ id: ids[0] })
    .then(newVeggieEntry => {
      res.status(201).json(newVeggieEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

module.exports = router;