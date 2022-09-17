import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import './Input.scss';

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
}

const Input = ({ label, type, ...restProps }: InputProp) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {type === 'password' ? (
        <div className="input__block">
          <label htmlFor="password" className="input__label">
            password
          </label>
          <div className="input__password__wrapper">
            <input
              {...restProps}
              id="password"
              className="input__field"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <FaEyeSlash
              className="input__password__show"
              color={showPassword ? '#3751ff' : '#9fa2b4'}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>
      ) : (
        <div className="input__block">
          <label className="input__label" htmlFor={label}>
            {label}
          </label>
          <input id="label" {...restProps} className="input__field" />
        </div>
      )}
    </>
  );
};

export default Input;
