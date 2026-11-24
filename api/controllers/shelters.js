const shelters = require('../data/shelters');

// GET /api/shelters
exports.getShelters = (req, res) => {
  res.json(shelters);
};

// GET /api/shelters/search?city=חיפה
exports.searchShelters = (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.json(shelters);
  }
  const found = shelters.filter((s) => s.city === city);
  res.json(found);
};

// GET /api/shelters/:id
exports.getById = (req, res) => {
  const id = Number(req.params.id);
  const shelter = shelters.find((s) => s.id === id);
  if (!shelter) {
    return res.status(404).json({ message: 'Shelter not found' });
  }
  res.json(shelter);
};

// POST /api/shelters - no DB yet, returns all data
exports.createShelter = (req, res) => {
  res.json(shelters);
};

// PUT /api/shelters/:id - no DB yet, returns all data
exports.updateShelter = (req, res) => {
  res.json(shelters);
};

// DELETE /api/shelters/:id - no DB yet, returns all data
exports.deleteShelter = (req, res) => {
  res.json(shelters);
};
