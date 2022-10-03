import React from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  size?: string;
  children: React.ReactNode | string;
  className?: string;
};

const Button = ({ variant, size, children, className, ...restProps }: ButtonProp) => {
  const btnClasses = classNames({
    btn: true,
    'btn--outlined': variant === 'outlined',
    'btn--transparent': variant === 'transparent',
    'btn--empty': variant === 'empty',
  });

  return (
    <button className={`${btnClasses} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
