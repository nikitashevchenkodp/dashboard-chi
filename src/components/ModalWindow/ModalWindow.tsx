import React from 'react';
import './ModalWindow.scss';

type ModalWindowType = {
  children?: React.ReactNode;
  active: boolean;
  setActive: (active: boolean) => void;
};

function ModalWindow({ children, active, setActive }: ModalWindowType) {
  const style = active ? 'modal__window active' : 'modal__window';
  const contentStyle = active ? 'modal__window__content active' : 'modal__window__content';

  return (
    <div className={style} onClick={() => setActive(false)}>
      <div className={contentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
