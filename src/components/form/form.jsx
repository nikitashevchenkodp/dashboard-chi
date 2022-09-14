import React from 'react';
import './form.scss';
import logo from '../../asset/logologo.svg';
const Form = ({ children, title, subtitle, question, change, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="logo">
        <img src={logo} alt="" className="logo__img" />
        <p className="logo__text">Dashboard Kit</p>
      </div>
      <div className="form__title">{title}</div>
      <p className="form__subtitle">{subtitle}</p>
      {children}
      <div className="form__footer">
        <span className="form__question">{question}</span>
        <span className="form__change">{change}</span>`
      </div>
    </form>
  );
};

export default Form;
