const animals = require('../data/animals');

// GET /api/animals
exports.getAnimals = (req, res) => {
  res.json(animals);
};

// GET /api/animals/featured
exports.getFeatured = (req, res) => {
  const featured = animals.filter((a) => a.featured === true);
  res.json(featured);
};

// GET /api/animals/search?species=כלב
exports.searchAnimals = (req, res) => {
  const species = req.query.species;
  if (!species) {
    return res.json(animals);
  }
  const found = animals.filter((a) => a.species === species);
  res.json(found);
};

// GET /api/animals/:id
exports.getById = (req, res) => {
  const id = Number(req.params.id);
  const animal = animals.find((a) => a.id === id);
  if (!animal) {
    return res.status(404).json({ message: 'Animal not found' });
  }
  res.json(animal);
};

// POST /api/animals - no DB yet, returns all data
exports.createAnimal = (req, res) => {
  res.json(animals);
};

// PUT /api/animals/:id - no DB yet, returns all data
exports.updateAnimal = (req, res) => {
  res.json(animals);
};

// DELETE /api/animals/:id - no DB yet, returns all data
exports.deleteAnimal = (req, res) => {
  res.json(animals);
};
