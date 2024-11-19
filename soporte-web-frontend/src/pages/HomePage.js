import React, { useEffect, useContext } from 'react';
import api from '../api/api';
import { TicketContext } from '../context/TicketContext';
import TicketList from '../components/TicketList';

const HomePage = () => {
  const { tickets, setTickets } = useContext(TicketContext);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await api.get('/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTickets();
  }, [setTickets]);

  return (
    <div>
      <h1>Tickets</h1>
      <TicketList tickets={tickets} />
    </div>
  );
};

export default HomePage;
