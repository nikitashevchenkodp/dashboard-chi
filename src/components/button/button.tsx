import React from 'react';
import './button.scss';

type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; children: string };

const Button = (props: ButtonProp) => {
  const { variant, children, ...restProps } = props;
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
