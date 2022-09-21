import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import './SideBar.scss';

import { OverviewIcon, TicketsIcon, SettingsIcon, ContactsIcon } from '../../icons/SvgIcons';

const SideBar = () => {
  const to = [
    { name: 'Overviev', to: 'overview', Icon: OverviewIcon },
    { name: 'Tickets', to: 'tickets', Icon: TicketsIcon },
    { name: 'Contacts', to: 'contacts', Icon: ContactsIcon },
  ];
  const links = to.map(({ to, name, Icon }) => (
    <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
      <Icon />
      <p>{name}</p>
    </NavLink>
  ));

  return (
    <div className="side-bar">
      <Logo position="horizontal" />
      <div className="nav nav--with-border">{links}</div>
      <div className="nav">
        <NavLink to="settings" className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
          <SettingsIcon />
          <p>Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
