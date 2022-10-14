import React, { FC } from 'react';
import './ModalWindow.scss';

type ModalWindowProps = {
  children?: React.ReactNode;
  active: boolean;
  setActive: (active: boolean) => void;
};

const ModalWindow: FC<ModalWindowProps> = ({ children, active, setActive }) => {
  const style = active ? 'modal__window active' : 'modal__window';
  const contentStyle = active ? 'modal__window__content active' : 'modal__window__content';

  return (
    <div className={style} onClick={() => setActive(false)}>
      <div className={contentStyle} onClick={(e) => e.stopPropagation()}>
        {active && children}
      </div>
    </div>
  );
};

export default ModalWindow;
