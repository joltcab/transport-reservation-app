// src/routes/index.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Asegúrate de que estás usando el nombre correcto del archivo y de las funciones
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);

module.exports = router;
