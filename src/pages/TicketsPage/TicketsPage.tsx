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
import Sort from '../../components/Sort';
import ItemMenu from '../../components/ItemMenu';

const TicketPage = () => {
  const [tickers, setTickers] = useState<TickerItem[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const deleteId = useRef<any>();

  const paginationItems = Math.ceil(tickers?.length / perPage);
  const [start, end] = paginationIndexes(page, perPage);

  const updateTicker = (ticker: TickerItem) => {
    const idx = tickers!.findIndex((item) => item.id === ticker.id);
    if (idx < 0) {
      setTickers((prevCustomers) => [...prevCustomers!, ticker]);
    } else if (idx >= 0) {
      setTickers((prevCustomers) => [...prevCustomers!.slice(0, idx), ticker, ...prevCustomers!.slice(idx + 1)]);
    }
  };

  function getItem(id: number) {
    const item = tickers?.filter((item) => item.id === id)[0]!;
    return new Promise<TickerItem>((resolve) => {
      resolve(item);
    });
  }

  const setDeleteItem = (id: number) => {
    setConfirmActive(true);
    deleteId.current = id;
  };

  const deleteItem = () => {
    setTickers(tickers.filter((item) => item.id !== deleteId.current));
  };

  useEffect(() => {
    getTickerData().then((res) => setTickers(res));
  }, []);

  const sortedItems = useMemo(() => sortFunctionTicker(tickers, sort), [sort, tickers]);
  const filteredItems = useMemo(() => filterTickerFunction(sortedItems, filter), [sortedItems, filter]);

  return (
    <>
      <div className="container">
        <div className="white-container">
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
            count={tickers?.length}
          />
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <AddTickerForm updateFunction={updateTicker} id={currentId} setActive={setActive} getItem={getItem} />
      </ModalWindow>
      <ModalWindow active={confirmActive} setActive={setConfirmActive}>
        <DeleteForm setConfirmActive={setConfirmActive} deleteItem={deleteItem} />
      </ModalWindow>
    </>
  );
};

export default TicketPage;
