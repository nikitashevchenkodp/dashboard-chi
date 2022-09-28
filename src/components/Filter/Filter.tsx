import React from 'react';
import './Filter.scss';

type FilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

const Filter = ({ filter, setFilter }: FilterProps) => {
  return (
    <>
      <div className="filter__title">Filter:</div>
      <input type="text" onChange={(e) => setFilter(e.target.value)} value={filter} />
    </>
  );
};

export default Filter;
