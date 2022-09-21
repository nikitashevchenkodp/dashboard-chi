import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './SideBar.scss';

const SideBar = () => {
  return (
    <div className="side-bar">
      <Logo position="horizontal" />
      <ul>
        <Link to="/admin/tickets">Tickets</Link>
        <Link to="/admin/customers">Customers</Link>
      </ul>
    </div>
  );
};

export default SideBar;
