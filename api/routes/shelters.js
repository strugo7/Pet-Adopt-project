const express = require('express');
const sheltersController = require('../controllers/shelters');
const router = express.Router();

// specific paths must come before '/:id'
router.get('/', sheltersController.getShelters);
router.get('/search', sheltersController.searchShelters);
router.get('/:id', sheltersController.getById);
router.post('/', sheltersController.createShelter);
router.put('/:id', sheltersController.updateShelter);
router.delete('/:id', sheltersController.deleteShelter);

module.exports = router;
