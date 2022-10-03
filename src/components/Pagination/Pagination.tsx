import React from 'react';
import arrowBack from '../../asset/arrow_back.svg';
import arrowNext from '../../asset/arrow_next.svg';
import './Pagination.scss';

type PaginationProps = {
  setPerPage: (perPage: number) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  paginationItems: number;
  startIndex: number;
  endIndex: number;
  count: number;
};

const Pagination = ({ setPerPage, page, setPage, paginationItems, startIndex, endIndex, count }: PaginationProps) => {
  return (
    <div className="pagination">
      <div className="pagination__block">
        <p className="pagination__perpage">Rows per page:</p>
        <select defaultValue={4} onChange={(e) => setPerPage(Number(e.target.value))} name="" id="">
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </div>
      <div className="pagination__block">
        <p className="pagination__count">
          {startIndex + 1} - {paginationItems === page ? count : endIndex} of {count}
        </p>
        <div className="pagination__control">
          <img src={arrowBack} onClick={() => setPage((page) => (page <= 1 ? 1 : page - 1))} alt="control_prev" />
          <img
            src={arrowNext}
            onClick={() => setPage((page) => (page >= paginationItems ? paginationItems : page + 1))}
            alt="control_prev"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
