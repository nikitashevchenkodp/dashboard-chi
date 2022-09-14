import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import './input.scss';

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {props.type === 'password' ? (
        <div className="input__block">
          <label htmlFor="" className="input__label">
            password
          </label>
          <div className="input__password__wrapper">
            <input
              {...props}
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
          <label className="input__label" htmlFor="">
            {props.label}
          </label>
          <input {...props} className="input__field" />
        </div>
      )}
    </>
  );
};

export default Input;
