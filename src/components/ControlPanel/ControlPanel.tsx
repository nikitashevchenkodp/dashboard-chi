import React, { useEffect, useState } from 'react';
import './ControlPanel.scss';
import filter from '../../asset/filter.svg';
import sort from '../../asset/sort.svg';
import Options from '../Options';

type ControlPanelProps = {
  setActive: (active: boolean) => void;
  setCurrentId: (id: null) => void;
  setSort: (sort: string) => void;
};

const ControlPanel = ({ setActive, setCurrentId, setSort }: ControlPanelProps) => {
  const [activeSort, setActiveSort] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<boolean>(false);

  const openOptions = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setActiveSort(true);
  };
  const openFilters = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setActiveFilter(true);
  };

  const changeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
    setActiveSort(false);
  };

  console.log(activeSort);

  return (
    <div className="controll-panel">
      <div className="controll-panel__item" onClick={openOptions}>
        <img className="controll-panel__icon" src={sort} alt="" />
        <p className="controll-panel_text">Sort</p>
        <Options active={activeSort} setActive={setActiveSort}>
          <div>
            <input name="sort" type="radio" value="name" onChange={changeSort} />
            <label htmlFor="">Name</label>
          </div>
          <div>
            {' '}
            <input name="sort" type="radio" value="date" onChange={changeSort} />
            <label htmlFor="">Date</label>
          </div>
          <div>
            {' '}
            <input name="sort" type="radio" value="priority" onChange={changeSort} />
            <label htmlFor="">Priority</label>
          </div>
        </Options>
      </div>
      <div className="controll-panel__item" onClick={openFilters}>
        <img className="controll-panel__icon" src={filter} alt="" />
        <p className="controll-panel_text">Filter</p>
        <Options active={activeFilter} setActive={setActiveFilter}>
          Filter
        </Options>
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
