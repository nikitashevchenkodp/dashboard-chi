import React from 'react';
import User from '../User/User';
import './Header.scss';

type HeaderProps = {
  title: string | null;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__title">{title}</div>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Header;
