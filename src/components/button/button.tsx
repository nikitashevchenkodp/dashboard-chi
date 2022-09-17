import React from 'react';
import './Button.scss';

type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; children: string };

const Button = ({ variant, children, ...restProps }: ButtonProp) => {
  function setClassName(variant: string | undefined) {
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
