import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import CustomersPage from '../CustomersPage';
import OverviewPage from '../OverviewPage';
import SettingsPage from '../SettingsPage';
import TicketPage from '../TicketsPage';
import './AdminPage.scss';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <SideBar />
      <div className="admin-page__container">
        <Routes>
          <Route path="overview" element={<OverviewPage />} />
          <Route path="tickets" element={<TicketPage />} />
          <Route path="contacts" element={<CustomersPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="tickets" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
