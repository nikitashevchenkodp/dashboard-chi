import React from 'react';
import user_photo from '../../asset/avatar_header.png';
import { useAppSelector } from '../../hooks/typedDispatch';
import './Header.scss';

type HeaderProps = {
  title: string | null;
};

const Header = ({ title }: HeaderProps) => {
  const { user } = useAppSelector(({ user }) => user);

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__title">{title}</div>
          <div className="user">
            <p className="user__name">
              {user?.firstName} {user?.lastName}
            </p>
            <div className="user__avatar">
              <img src={user_photo} alt="user avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
