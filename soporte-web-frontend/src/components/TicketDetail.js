import React from 'react';

const TicketDetail = ({ ticket }) => {
  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketDetail;
