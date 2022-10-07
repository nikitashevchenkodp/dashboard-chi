import React, { forwardRef, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import './Input.scss';

type InputProp = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  label?: string;
  id: string;
};

const Input = forwardRef((props: InputProp, ref: any) => {
  const { name, id, placeholder, label, type, ...restProps } = props;
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
            ref={ref}
          />
          <FaEyeSlash
            className="input__password__show"
            color={showPassword ? '#3751ff' : '#9fa2b4'}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
      ) : (
        <input id={id} type={type} {...restProps} ref={ref} className="input__field" />
      )}
    </div>
  );
});

export default Input;
