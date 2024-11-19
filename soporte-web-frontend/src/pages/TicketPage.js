import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useParams } from 'react-router-dom';
import TicketDetail from '../components/TicketDetail';

const TicketPage = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await api.get(`/tickets/${id}`);
        setTicket(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTicket();
  }, [id]);

  return (
    <div>
      {ticket ? <TicketDetail ticket={ticket} /> : <p>Loading...</p>}
    </div>
  );
};

export default TicketPage;
