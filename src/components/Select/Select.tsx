import React from 'react';
import './Select.scss';

type SelectProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  options: string[];
};

const Select = ({ onChange, value, placeholder, name, options }: SelectProps) => {
  return (
    <select className="select mb-24" name={name} onChange={onChange} value={value}>
      <option style={{ color: 'grey' }} value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
