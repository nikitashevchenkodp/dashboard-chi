import React, { useState } from 'react';
import './ControlPanel.scss';
import filterIcon from '../../asset/filter.svg';
import sort from '../../asset/sort.svg';
import Options from '../Options';
import Sort from '../Sort';
import Filter from '../Filter';
import Button from '../Button';

type ControlPanelProps = {
  setActive: (active: boolean) => void;
  setCurrentId: (id: null) => void;
  setSort: (sort: string) => void;
  sortCriterias: string[];
  setFilter: (filter: string) => void;
  filter: string;
};

const ControlPanel = ({ setActive, setCurrentId, setSort, sortCriterias, setFilter, filter }: ControlPanelProps) => {
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

  return (
    <div className="controll-panel">
      <div className="controll-panel__item" onClick={openOptions}>
        <img className="controll-panel__icon" src={sort} alt="" />
        <p className="controll-panel_text">Sort</p>
        <Options active={activeSort} setActive={setActiveSort}>
          <Sort sortCriterias={sortCriterias} onChange={changeSort} />
        </Options>
      </div>

      <div className="controll-panel__item" onClick={openFilters}>
        <img className="controll-panel__icon" src={filterIcon} alt="" />
        <p className="controll-panel_text">Filter</p>
        <Options active={activeFilter} setActive={setActiveFilter}>
          <Filter filter={filter} setFilter={setFilter} />
        </Options>
      </div>

      <Button
        variant="transparent"
        onClick={() => {
          setActive(true);
          setCurrentId(null);
        }}
      >
        + Add ticker
      </Button>
    </div>
  );
};

export default ControlPanel;
