const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['Question', 'Problem', 'Request', 'Support'], required: true },
  attachments: [{ type: String }],
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
