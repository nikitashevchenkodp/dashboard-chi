import React from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string; children: string };

const Button = ({ variant, size, children, ...restProps }: ButtonProp) => {
  const btnClasses = classNames({
    btn: true,
    'btn--outlined': variant === 'outlined',
    'btn--medium': size === 'medium',
  });

  return (
    <button className={btnClasses} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
