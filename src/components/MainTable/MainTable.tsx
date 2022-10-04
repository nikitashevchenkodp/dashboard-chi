import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { paginationIndexes } from '../../utils';
import ControlPanel from '../ControlPanel';
import Loader from '../Loader';
import Pagination from '../Pagination';

type TableProps = {
  data: any[];
  loading: boolean;
  headerTitles: string[];
  renderItem: (item: any) => JSX.Element;
  onEdit: (id: number | null) => void;
  sortCriterias: string[];
  sortFunction: (items: any[], filter: string) => any[];
  filterFunction: (items: any[], filter: string) => any[];
};

const MainTable = ({
  data,
  loading,
  headerTitles,
  sortCriterias,
  sortFunction,
  filterFunction,
  onEdit,
  renderItem,
}: TableProps) => {
  const [perPage, setPerPage] = useState(4);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');

  const paginationItems = Math.ceil(data?.length / perPage);
  const [start, end] = paginationIndexes(page, perPage);
  const sortedItems = useMemo(() => sortFunction(data, sort), [sort, data]);
  const filteredItems = useMemo(() => filterFunction(sortedItems, filter), [sortedItems, filter]);

  return (
    <div className="container">
      <div className="white-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <ControlPanel
              setSort={setSort}
              onEdit={onEdit}
              sortCriterias={sortCriterias}
              setFilter={setFilter}
              filter={filter}
            />
            <TableContainer className="table__container">
              <Table stickyHeader sx={{ minWidth: '1000px' }} aria-label="simple table">
                <TableHead sx={tableStyles.tHead}>
                  <TableRow>
                    {headerTitles.map((title) => (
                      <TableCell key={title} sx={tableStyles.headCell} align="left">
                        {title}
                      </TableCell>
                    ))}
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredItems.slice(start, end).map((row, i) => {
                    return renderItem(row);
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination
              setPerPage={setPerPage}
              page={page}
              setPage={setPage}
              paginationItems={paginationItems}
              startIndex={start}
              endIndex={end}
              count={data?.length}
            />
          </>
        )}
      </div>
    </div>
  );
};

export const tableStyles = {
  tHead: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
  headCell: {
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#9FA2B4',
  },
  mainCell: {
    display: 'flex',
    paddintTop: '24px',
    paddingBottm: '24px',
    alignItems: 'center',
    minWidth: '300px',
    gap: '24px',
  },
  mainCellImgImg: {
    display: 'block',
    height: '100%',
    borderRadius: '50%',
  },
  tableRowBody: {
    // '&:last-child td, &:last-child th': { border: 0 },
    cursor: 'pointer',
    '&:hover': { background: 'rgba(55, 81, 255, 0.04)' },
  },
  mainCellImg: { width: '44px', borderRadius: '50%', overflow: 'hidden' },
  cellTitle: { fontSize: '14px', fontWeight: '600', lineHeight: '20px', marginBottom: '4px' },
  cellText: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#C5C7CD' },
};

export default MainTable;
