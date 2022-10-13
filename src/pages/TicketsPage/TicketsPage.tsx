import React from 'react';
import TicketsTable from '../../components/TicketsTable';
import './TicketsPage.scss';
import Header from '../../components/Header';

const TicketPage = () => {
  return (
    <>
      <Header title={'Tickets'} />
      <TicketsTable />;
    </>
  );
};

export default TicketPage;
