import React from 'react';
import CustomersTable from '../../components/CustomersTable';
import './CustomersPage.scss';
import Header from '../../components/Header';

const CustomersPage = () => {
  return (
    <>
      <Header title="Customers" />
      <CustomersTable />
    </>
  );
};

export default CustomersPage;
