import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import './SideBar.scss';
import { OverviewIcon, TicketsIcon, SettingsIcon, ContactsIcon } from '../../icons/SvgIcons';

const SideBar = () => {
  const pathTo = [
    { name: 'Overview', to: 'overview', Icon: OverviewIcon },
    { name: 'Tickets', to: 'tickets', Icon: TicketsIcon },
    { name: 'Contacts', to: 'contacts', Icon: ContactsIcon },
  ];

  const links = pathTo.map(({ to, name, Icon }) => {
    return (
      <li key={to}>
        <NavLink to={to} className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
          <Icon />
          <p>{name}</p>
        </NavLink>
      </li>
    );
  });

  return (
    <div className="side-bar">
      <Logo position="horizontal" />
      <ul className="nav nav--with-border">{links}</ul>
      <ul className="nav">
        <li>
          <NavLink to="settings" className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
            <SettingsIcon />
            <p>Settings</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
