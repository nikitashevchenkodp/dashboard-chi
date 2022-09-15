import React from 'react';
import './form.scss';
// import logo from '../../asset/logologo.svg';

type FormProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onSubmit?: () => void;
};

const Form = ({ children, title, subtitle, onSubmit }: FormProps) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="logo">
        <img src="../../asset/logologo.svg" alt="logo" className="logo__img" />
        <p className="logo__text">Dashboard Kit</p>
      </div>
      <div className="form__title">{title}</div>
      <p className="form__subtitle">{subtitle}</p>
      {children}
      <div className="form__footer"></div>
    </form>
  );
};

export default Form;
