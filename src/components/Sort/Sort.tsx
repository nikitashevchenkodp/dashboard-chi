import React from 'react';
import './Sort.scss';

type SortProps = {
  sortCriterias: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Sort = ({ sortCriterias, onChange }: SortProps) => {
  return (
    <div className="sort">
      <div className="sort__title">Sort by:</div>
      {sortCriterias.map((criteria) => (
        <div className="sort__item" key={criteria}>
          <input name="sort" type="radio" value={criteria} onChange={onChange} />
          <label htmlFor="">{criteria.toUpperCase()}</label>
        </div>
      ))}
    </div>
  );
};

export default Sort;
