import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const AdminLayout = () => {
  return (
    <div className="admin-page">
      <SideBar />
      <div className="admin-page__container">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
