import React from 'react';

const TicketList = ({ tickets }) => {
  return (
    <ul>
      {tickets.map(ticket => (
        <li key={ticket._id}>{ticket.title}</li>
      ))}
    </ul>
  );
};

export default TicketList;
