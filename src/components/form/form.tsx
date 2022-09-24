import React from 'react';
import './Form.scss';

type FormProps = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className="form" onSubmit={(e) => onSubmit && onSubmit(e)}>
      {children}
      <div className="form__footer"></div>
    </form>
  );
};

export const FormTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <div className="form__title">{title}</div>
      <p className="form__subtitle">{subtitle}</p>
    </>
  );
};

export default Form;
