import React from 'react';
import './button.scss';

const Button = (props) => {
  const { variant, children, ...restProps } = props;
  function setClassName(varian) {
    switch (variant) {
      case 'outlined':
        return 'button--outlined';
      default:
        return 'button';
    }
  }

  return (
    <button className={setClassName(variant)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
