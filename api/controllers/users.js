const users = require('../data/users');

// GET /api/users
exports.getUsers = (req, res) => {
  res.json(users);
};

// GET /api/users/search?role=admin
exports.searchUsers = (req, res) => {
  const role = req.query.role;
  if (!role) {
    return res.json(users);
  }
  const found = users.filter((u) => u.role === role);
  res.json(found);
};

// GET /api/users/:id
exports.getById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// POST /api/users - no DB yet, returns all data
exports.createUser = (req, res) => {
  res.json(users);
};

// PUT /api/users/:id - no DB yet, returns all data
exports.updateUser = (req, res) => {
  res.json(users);
};

// DELETE /api/users/:id - no DB yet, returns all data
exports.deleteUser = (req, res) => {
  res.json(users);
};
