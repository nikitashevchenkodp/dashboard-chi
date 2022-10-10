import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './Select.scss';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  value: string;
  name: string;
  placeholder: string;
  options: string[] | number[];
  id: string;
  label?: string;
  error?: string;
};

const Select = forwardRef((props: SelectProps, ref: any) => {
  const { value, placeholder, name, options, id, label, error, ...restProps } = props;

  const selectClass = classNames({
    select: true,
    select__error: !!error,
  });

  return (
    <div className="select__block">
      <label className="select__label" htmlFor={id}>
        {label}
      </label>
      <select id={id} {...restProps} className={selectClass} name={name} value={value} ref={ref}>
        <option style={{ color: 'grey' }} value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="select__error-message">{error}</p>
    </div>
  );
});

export default Select;
