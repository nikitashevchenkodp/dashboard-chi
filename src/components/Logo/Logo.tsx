import classNames from 'classnames';
import React from 'react';
import logo from '../../asset/logologo.svg';
import './Logo.scss';

type LogoProps = { position?: string };

const Logo = ({ position }: LogoProps) => {
  const logoClasses = classNames({
    logo: true,
    'logo--horizontal': position === 'horizontal',
  });

  return (
    <div className={logoClasses}>
      <img src={logo} alt="logo" className="logo__img" />
      <p className="logo__text">Dashboard Kit</p>
    </div>
  );
};

export default Logo;
