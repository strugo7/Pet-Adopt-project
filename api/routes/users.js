const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

// specific paths must come before '/:id'
router.get('/', usersController.getUsers);
router.get('/search', usersController.searchUsers);
router.get('/:id', usersController.getById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
