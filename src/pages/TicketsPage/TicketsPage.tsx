import React, { useEffect, useMemo, useRef, useState } from 'react';
import './TicketsPage.scss';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { AddTickerForm, ControlPanel, Priority, Pagination, ModalWindow } from '../../components';

import {
  sortFunctionTicker,
  filterTickerFunction,
  transformData,
  tickerCellTitles,
  getTickerData,
  paginationIndexes,
} from '../../utils';
import { TickerItem } from '../../utils/consts';
import { tableStyles } from './styles';
import DeleteForm from '../../components/DeleteForm';
import ItemMenu from '../../components/ItemMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useDispatch } from 'react-redux';
import { fetchAllTickets, loadAllTickets, rejectAllTickets } from '../../store/action-creators/tickets';
import Loader from '../../components/Loader';

const TicketPage = () => {
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [perPage, setPerPage] = useState(4);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const deleteId = useRef<any>();

  const { tickets, error, loading } = useSelector((state: RootState) => state.tickets);
  const dispatch = useDispatch();

  const paginationItems = Math.ceil(tickets?.length / perPage);
  const [start, end] = paginationIndexes(page, perPage);

  const setDeleteItem = (id: number) => {
    setConfirmActive(true);
    deleteId.current = id;
  };

  useEffect(() => {
    dispatch(fetchAllTickets());
    getTickerData()
      .then((res) => {
        console.log('get result');
        dispatch(loadAllTickets(res));
      })
      .catch((e) => dispatch(rejectAllTickets(e.message)));
  }, [dispatch]);

  const sortedItems = useMemo(() => sortFunctionTicker(tickets, sort), [sort, tickets]);
  const filteredItems = useMemo(() => filterTickerFunction(sortedItems, filter), [sortedItems, filter]);

  // if (loading) {
  //   return <div>Loading</div>;
  // }

  return (
    <>
      <div className="container">
        <div className="white-container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <ControlPanel
                setSort={setSort}
                setCurrentId={setCurrentId}
                setActive={setActive}
                sortCriterias={['name', 'date', 'priority']}
                setFilter={setFilter}
                filter={filter}
              />
              <TableContainer className="table__container">
                <Table stickyHeader sx={{ minWidth: '1000px' }} aria-label="simple table">
                  <TableHead sx={tableStyles.tHead}>
                    <TableRow>
                      {tickerCellTitles.map((title) => (
                        <TableCell key={title} sx={tableStyles.headCell} align="left">
                          {title}
                        </TableCell>
                      ))}
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredItems.slice(start, end).map((row, i) => (
                      <TableRow key={i} sx={tableStyles.tableRowBody}>
                        <TableCell>
                          <div style={tableStyles.mainCell}>
                            <div style={tableStyles.mainCellImg}>
                              <img style={tableStyles.mainCellImgImg} src={row.image} alt="user_avatar" />
                            </div>
                            <div>
                              <p style={tableStyles.cellTitle}>{row.details_text}</p>
                              <p style={tableStyles.cellText}>Updated 1 day ago</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell sx={{ minWidth: '80px', width: '20%' }} align="left">
                          <p style={tableStyles.cellTitle}>{row.name}</p>
                          <p style={tableStyles.cellText}>on {'24.05.2019'}</p>
                        </TableCell>
                        <TableCell sx={{ minWidth: '80px', width: '20%' }} align="left">
                          <p style={tableStyles.cellTitle}>{transformData(row.date)}</p>
                          <p style={tableStyles.cellText}>on {'6:30PM'}</p>
                        </TableCell>
                        <TableCell sx={{ minWidth: '80px', width: '10%' }} align="left">
                          <Priority status={row.status} />
                        </TableCell>
                        <TableCell sx={{ minWidth: '30px', width: '5%' }} align="left">
                          <ItemMenu
                            setActive={setActive}
                            setCurrentId={() => setCurrentId(row.id)}
                            deleteItem={() => setDeleteItem(row.id)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
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
                count={tickets?.length}
              />
            </>
          )}
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <AddTickerForm id={currentId} setActive={setActive} />
      </ModalWindow>
      <ModalWindow active={confirmActive} setActive={setConfirmActive}>
        <DeleteForm setConfirmActive={setConfirmActive} deleteId={deleteId.current} />
      </ModalWindow>
    </>
  );
};

export default TicketPage;
