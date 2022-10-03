import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import './Input.scss';

type InputProp = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  label?: string;
  id: string;
};

const Input = ({ id, label, type, placeholder, ...restProps }: InputProp) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input__block">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      {type === 'password' ? (
        <div className="input__password__wrapper">
          <input
            {...restProps}
            id={id}
            className="input__field"
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
          />
          <FaEyeSlash
            className="input__password__show"
            color={showPassword ? '#3751ff' : '#9fa2b4'}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
      ) : (
        <input id={id} type={type} {...restProps} className="input__field" />
      )}
    </div>
  );
};

export default Input;
