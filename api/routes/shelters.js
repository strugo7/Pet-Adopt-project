const express = require('express');
const router = express.Router();
const shelters = require('../data/shelters');

// GET /api/shelters
router.get('/', (req, res) => {
  res.json(shelters);
});

module.exports = router;
