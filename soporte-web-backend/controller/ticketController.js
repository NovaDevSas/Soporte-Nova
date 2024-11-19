const asyncHandler = require('express-async-handler');
const Ticket = require('../models/ticket');

// Controlador para crear un ticket
const createTicket = asyncHandler(async (req, res) => {
  const { title, description, type } = req.body;

  const ticket = await Ticket.create({
    user: req.user._id,
    title,
    description,
    type,
  });

  res.status(201).json(ticket);
});

// Controlador para obtener todos los tickets
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({ user: req.user._id });
  res.json(tickets);
});

module.exports = {
  createTicket,
  getTickets,
};
