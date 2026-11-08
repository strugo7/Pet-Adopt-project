const express = require('express');
const router = express.Router();
const animals = require('../data/animals');

// GET /api/animals
router.get('/', (req, res) => {
  res.json(animals);
});

module.exports = router;
