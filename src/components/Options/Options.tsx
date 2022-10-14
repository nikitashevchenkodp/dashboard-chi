import classNames from 'classnames';
import React, { FC, useEffect } from 'react';
import './Options.scss';

type OptionsProps = {
  children: React.ReactNode;
  active: boolean;
  setActive: (active: boolean) => void;
};

const Options: FC<OptionsProps> = ({ children, active, setActive }) => {
  useEffect(() => {
    const closeOptions = (e: Event) => {
      const target = e.target as HTMLElement;
      console.log(target.classList);
      if (!target.classList.contains('options')) {
        setActive(false);
      }
    };
    window.addEventListener('click', closeOptions);
    return () => {
      window.removeEventListener('click', closeOptions);
    };
  }, []);

  const classes = classNames({
    options: true,
    'options--open': active,
  });
  return <div className={classes}>{children}</div>;
};

export default Options;
