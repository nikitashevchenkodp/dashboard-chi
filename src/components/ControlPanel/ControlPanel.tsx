import React from 'react';
import './ControlPanel.scss';
import filter from '../../asset/filter.svg';
import sort from '../../asset/sort.svg';

type ControlPanelProps = {
  setActive: (active: boolean) => void;
  setCurrentId: (id: null) => void;
};

const ControlPanel = ({ setActive, setCurrentId }: ControlPanelProps) => {
  return (
    <div className="controll-panel">
      <div className="controll-panel__item">
        <img className="controll-panel__icon" src={sort} alt="" />
        <p className="controll-panel_text">Sort</p>
      </div>
      <div className="controll-panel__item">
        <img className="controll-panel__icon" src={filter} alt="" />
        <p className="controll-panel_text">Filter</p>
      </div>
      <button
        className="controll-panel__add"
        onClick={() => {
          setActive(true);
          setCurrentId(null);
        }}
      >
        + Add ticker
      </button>
    </div>
  );
};

export default ControlPanel;
