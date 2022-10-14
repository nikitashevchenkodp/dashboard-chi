import classNames from 'classnames';
import React, { forwardRef, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import './Input.scss';

type InputProp = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  label?: string;
  id: string;
  error?: string | undefined;
};

const Input = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  const { id, placeholder, label, type, error, ...restProps } = props;
  const [showPassword, setShowPassword] = useState(false);
  const inputClass = classNames({
    input__field: true,
    input__error: !!error,
  });
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
            className={inputClass}
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
        <input id={id} type={type} {...restProps} ref={ref} className={inputClass} />
      )}
      <p className="input__error-message">{error}</p>
    </div>
  );
});

export default Input;
