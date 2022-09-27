import React, { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import CustomersPage from '../CustomersPage';
import OverviewPage from '../OverviewPage';
import SettingsPage from '../SettingsPage';
import TicketPage from '../TicketsPage';
import './AdminPage.scss';

const AdminPage = () => {
  const [headerTitle, setHeaderTitle] = useState<string | null>('Overview');
  const location = useLocation();
  // const isActive = location.pathname === item.To;
  console.log(location);

  return (
    <div className="admin-page">
      <SideBar change={setHeaderTitle} />
      <div className="admin-page__container">
        <Header title={headerTitle} />
        <Routes>
          <Route path="overview" element={<OverviewPage />} />
          <Route path="tickets" element={<TicketPage />} />
          <Route path="contacts" element={<CustomersPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="overview" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
