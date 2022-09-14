import React, { useState } from 'react';
import './button.scss';

const Button = ({ variant, onClick, children }) => {
  function setClassName(varian) {
    switch (variant) {
      case 'outlined':
        return 'button--outlined';
      default:
        return 'button';
    }
  }

  return (
    <button className={setClassName(variant)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
