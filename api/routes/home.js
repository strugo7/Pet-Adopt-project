const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  res.json({ message: 'WarmPaws API is running' });
});

module.exports = router;
