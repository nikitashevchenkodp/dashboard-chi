import React from 'react';
import Logo from '../Logo';
import './Form.scss';

type FormProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, title, subtitle, onSubmit }: FormProps) => {
  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <Logo />
      <div className="form__title">{title}</div>
      <p className="form__subtitle">{subtitle}</p>
      {children}
      <div className="form__footer"></div>
    </form>
  );
};

export default Form;
