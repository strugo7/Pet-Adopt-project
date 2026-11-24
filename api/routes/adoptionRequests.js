const express = require('express');
const adoptionRequestsController = require('../controllers/adoptionRequests');
const router = express.Router();

// specific paths must come before '/:id'
router.get('/', adoptionRequestsController.getRequests);
router.get('/search', adoptionRequestsController.searchRequests);
router.get('/:id', adoptionRequestsController.getById);
router.post('/', adoptionRequestsController.createRequest);
router.put('/:id', adoptionRequestsController.updateRequest);
router.delete('/:id', adoptionRequestsController.deleteRequest);

module.exports = router;
