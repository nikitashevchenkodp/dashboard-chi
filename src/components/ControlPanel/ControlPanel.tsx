import React from 'react';
import './ControlPanel.scss';
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
  return (
    <div className="controll-panel">
      <Sort setSort={setSort} sortCriterias={sortCriterias} />
      <Filter filter={filter} setFilter={setFilter} />

      <Button
        style={{ minWidth: '100px' }}
        className="ml-auto"
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
