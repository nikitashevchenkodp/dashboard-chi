import React, { useEffect, useRef, useState } from 'react';
import './TicketsPage.scss';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs';

import { tickerCellTitles, getTickerData, paginationIndexes, TickerItem } from '../../utils/consts';
import {
  Button,
  Form,
  FormTitle,
  AddTickerForm,
  ControlPanel,
  Priority,
  Pagination,
  ModalWindow,
} from '../../components';

import { sortFunctionTicker } from '../../utils/sortFunction';
import { filterTickerFunction } from '../../utils/filterFunction';
import { transformData } from '../../utils/transformData';

const TicketPage = () => {
  console.log('ticketPage');

  const [tickers, setTickers] = useState<TickerItem[]>([]);
  //Modal with AddForm
  const [active, setActive] = useState<boolean>(false);
  //Modal for confirm removal item
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  //State for editing or adding new item
  const [currentId, setCurrentId] = useState<number | null>(null);
  //Pagination state
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState(1);
  //Sort and filter state
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

  const deleteItem = (e: React.MouseEvent<SVGElement, MouseEvent>, id: number) => {
    e.stopPropagation();
    setConfirmActive(true);
    deleteId.current = id;
  };

  useEffect(() => {
    getTickerData().then((res) => setTickers(res));
  }, []);

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
                {filterTickerFunction(sortFunctionTicker(tickers, sort), filter)
                  ?.slice(start, end)
                  .map((row, i) => (
                    <TableRow
                      key={i}
                      sx={tableStyles.tableRowBody}
                      onClick={() => {
                        setCurrentId(row.id);
                        setActive(true);
                      }}
                    >
                      <TableCell>
                        <div style={tableStyles.mainCell}>
                          <div style={tableStyles.mainCellImg}>
                            <img src={row.image} alt="user_avatar" />
                          </div>
                          <div>
                            <p style={tableStyles.cellTitle}>{row.details_text}</p>
                            <p style={tableStyles.cellText}>Updated 1 day ago</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
                        <p style={tableStyles.cellTitle}>{row.name}</p>
                        <p style={tableStyles.cellText}>on {'24.05.2019'}</p>
                      </TableCell>
                      <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
                        <p style={tableStyles.cellTitle}>{transformData(row.date)}</p>
                        <p style={tableStyles.cellText}>on {'6:30PM'}</p>
                      </TableCell>
                      <TableCell sx={{ minWidth: '80px', width: '10%', overflowX: 'auto' }} align="left">
                        <Priority status={row.status} />
                      </TableCell>
                      <TableCell sx={{ minWidth: '30px', width: '5%', overflowX: 'auto' }} align="left">
                        <BsThreeDotsVertical color="#C5C7CD" onClick={(e) => deleteItem(e, row.id)} />
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
        <Form>
          <FormTitle title="Are you sure ?" />
          <Button
            type="button"
            onClick={() => {
              setTickers(tickers.filter((item) => item.id !== deleteId.current));
              setConfirmActive(false);
            }}
          >
            Yes
          </Button>
          <button type="button" className="controll-panel__add" onClick={() => setConfirmActive(false)}>
            No
          </button>
        </Form>
      </ModalWindow>
    </>
  );
};

const tableStyles = {
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
    img: {
      height: '100%',
      borderRadius: '50%',
    },
  },
  tableRowBody: {
    '&:last-child td, &:last-child th': { border: 0 },
    cursor: 'pointer',
    '&:hover': { background: 'rgba(55, 81, 255, 0.04)' },
  },
  mainCellImg: { width: '44px', borderRadius: '50%', overflow: 'hidden' },
  cellTitle: { fontSize: '14px', fontWeight: '600', lineHeight: '20px', marginBottom: '4px' },
  cellText: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#C5C7CD' },
};

export default TicketPage;
