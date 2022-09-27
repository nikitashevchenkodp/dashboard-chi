import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import './SideBar.scss';
import { OverviewIcon, TicketsIcon, SettingsIcon, ContactsIcon } from '../../icons/SvgIcons';

type SidebarProps = {
  change: (name: string) => void;
};
const SideBar = ({ change }: SidebarProps) => {
  const location = useLocation();
  // const isActive = location.pathname === item.To;
  console.log(location);

  const pathTo = [
    { name: 'Overview', to: 'overview', Icon: OverviewIcon },
    { name: 'Tickets', to: 'tickets', Icon: TicketsIcon },
    { name: 'Contacts', to: 'contacts', Icon: ContactsIcon },
  ];

  const links = pathTo.map(({ to, name, Icon }) => {
    // if (location.pathname.includes(to)) {
    //   change(name);
    // }
    return (
      <li key={to}>
        <NavLink
          onClick={() => change(name)}
          to={to}
          className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}
        >
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
          <NavLink
            onClick={() => change('Settings')}
            to="settings"
            className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}
          >
            <SettingsIcon />
            <p>Settings</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
