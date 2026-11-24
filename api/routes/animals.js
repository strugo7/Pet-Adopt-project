const express = require('express');
const animalsController = require('../controllers/animals');
const router = express.Router();

// specific paths must come before '/:id'
router.get('/', animalsController.getAnimals);
router.get('/featured', animalsController.getFeatured);
router.get('/search', animalsController.searchAnimals);
router.get('/:id', animalsController.getById);
router.post('/', animalsController.createAnimal);
router.put('/:id', animalsController.updateAnimal);
router.delete('/:id', animalsController.deleteAnimal);

module.exports = router;
