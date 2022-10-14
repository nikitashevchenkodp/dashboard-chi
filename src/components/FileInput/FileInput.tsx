import React, { forwardRef, useState } from 'react';
import './FileInput.scss';
import { BsPlusLg } from 'react-icons/bs';
import classNames from 'classnames';

type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
  const { label, error, ...restProps } = props;

  const classes = classNames({
    'file-input__label': true,
  });

  return (
    <div className="file-input__container">
      <div>
        <input ref={ref} {...restProps} type="file" className="file-input__field" id="file-input" />
        <label htmlFor="file-input" className={classes}>
          <BsPlusLg color="white" fontSize={25} />
        </label>
        <p className="file-input__title">Add photo</p>
      </div>
      <p>{error}</p>
    </div>
  );
});

export default FileInput;
