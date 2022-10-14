import React, { FC } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  size?: string;
  children: React.ReactNode | string;
  className?: string;
};

const Button: FC<ButtonProps> = ({ variant, size, children, className, ...restProps }) => {
  const btnClasses = classNames({
    btn: true,
    'btn--outlined': variant === 'outlined',
    'btn--transparent': variant === 'transparent',
    'btn--empty': variant === 'empty',
    'btn--circle': variant === 'circle',
  });

  return (
    <button className={`${btnClasses} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
