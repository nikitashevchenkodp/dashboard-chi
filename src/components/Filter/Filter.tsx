import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../Button';
import filterIcon from '../../asset/filter.svg';

import './Filter.scss';

type FilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

const Filter = ({ filter, setFilter }: FilterProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const openFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenFilter(true);
  };

  const filterClasses = classNames({
    filter: true,
    'filter--active': openFilter,
  });
  return (
    <>
      {!openFilter && (
        <Button variant="empty" onClick={openFilters}>
          <img className="controll-panel__icon" src={filterIcon} alt="" />
          <p className="controll-panel_text">Filter</p>
        </Button>
      )}
      <div className={filterClasses}>
        <div className="filter__close" onClick={() => setOpenFilter(false)}>
          X
        </div>
        <input className="filter__input" type="text" onChange={(e) => setFilter(e.target.value)} value={filter} />
      </div>
    </>
  );
};

export default Filter;
