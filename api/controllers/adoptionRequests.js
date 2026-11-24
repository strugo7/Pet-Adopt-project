const adoptionRequests = require('../data/adoptionRequests');

// GET /api/adoption-requests
exports.getRequests = (req, res) => {
  res.json(adoptionRequests);
};

// GET /api/adoption-requests/search?status=pending
exports.searchRequests = (req, res) => {
  const status = req.query.status;
  if (!status) {
    return res.json(adoptionRequests);
  }
  const found = adoptionRequests.filter((r) => r.status === status);
  res.json(found);
};

// GET /api/adoption-requests/:id
exports.getById = (req, res) => {
  const id = Number(req.params.id);
  const request = adoptionRequests.find((r) => r.id === id);
  if (!request) {
    return res.status(404).json({ message: 'Adoption request not found' });
  }
  res.json(request);
};

// POST /api/adoption-requests - no DB yet, returns all data
exports.createRequest = (req, res) => {
  res.json(adoptionRequests);
};

// PUT /api/adoption-requests/:id - no DB yet, returns all data
exports.updateRequest = (req, res) => {
  res.json(adoptionRequests);
};

// DELETE /api/adoption-requests/:id - no DB yet, returns all data
exports.deleteRequest = (req, res) => {
  res.json(adoptionRequests);
};
