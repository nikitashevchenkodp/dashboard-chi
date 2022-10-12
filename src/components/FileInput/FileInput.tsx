import React, { forwardRef, useState } from 'react';
import './FileInput.scss';
import { BsPlusLg } from 'react-icons/bs';
import classNames from 'classnames';

type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const FileInput = forwardRef((props: FileInputProps, ref: any) => {
  const [drag, setDrag] = useState(false);
  const { label, error, ...restProps } = props;

  const dragStartHandler = (e: any) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragLeavetHandler = (e: any) => {
    e.preventDefault();
    setDrag(false);
  };
  const dropHandler = (e: any) => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
  };

  const classes = classNames({
    'file-input__label': true,
    'file-input__drag': drag,
  });

  return (
    <div className="file-input__container">
      <input ref={ref} {...restProps} type="file" className="file-input__field" id="file-input" />
      <label
        htmlFor="file-input"
        className={classes}
        onDragStart={dragStartHandler}
        onDragLeave={dragLeavetHandler}
        onDragOver={dragStartHandler}
        onDrop={dropHandler}
      >
        <BsPlusLg color="white" fontSize={25} />
      </label>
      <p className="file-input__title">Add photo</p>
    </div>
  );
});

export default FileInput;
