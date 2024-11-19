const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware');

// Rutas para el manejo de usuarios
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
