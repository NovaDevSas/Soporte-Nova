const express = require('express');
const router = express.Router();
const { createTicket, getTickets } = require('../controller/ticketController');
const { protect } = require('../middleware/authMiddleware');

// Rutas para el manejo de tickets
router.post('/', protect, createTicket);
router.get('/', protect, getTickets);

module.exports = router;
