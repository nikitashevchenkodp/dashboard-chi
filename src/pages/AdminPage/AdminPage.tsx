import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import CustomersPage from '../CustomersPage';
import TicketPage from '../TicketPage';
import './AdminPage.scss';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <SideBar />
      <Routes>
        <Route path="tickets" element={<TicketPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="*" element={<Navigate to="tickets" replace />} />
      </Routes>
    </div>
  );
};

export default AdminPage;
