import React, { useCallback, useEffect, useState } from 'react';
import './TicketsPage.scss';
import filter from '../../asset/filter.svg';
import sort from '../../asset/sort.svg';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Priority from '../../components/Priority';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { cellTitles, getData, paginationIndexes, TickerItem } from '../../utils/consts';
import ModalWindow from '../../components/ModalWindow';
import AddForm from '../../components/AddForm';
import Pagination from '../../components/Pagination';

const TicketPage = () => {
  const [tickers, setTickers] = useState<TickerItem[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    getData().then((res) => setTickers(res));
  }, []);

  return (
    <>
      <div className="container">
        <div className="white-container">
          {/* controll panel start */}
          <div className="controll-panel">
            <div className="controll-panel__item">
              <img className="controll-panel__icon" src={sort} alt="" />
              <p className="controll-panel_text">Sort</p>
            </div>
            <div className="controll-panel__item">
              <img className="controll-panel__icon" src={filter} alt="" />
              <p className="controll-panel_text">Filter</p>
            </div>
            <button
              className="controll-panel__add"
              onClick={() => {
                setActive(true);
                setCurrentId(null);
              }}
            >
              + Add ticker
            </button>
          </div>
          {/* controll panel end */}

          <TableContainer className="table__container">
            <Table sx={{ minWidth: '1000px' }} aria-label="simple table">
              <TableHead sx={tableStyles.tHead}>
                <TableRow>
                  {cellTitles.map((title) => (
                    <TableCell key={title} sx={tableStyles.headCell} align="left">
                      {title}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tickers?.slice(start, end).map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      cursor: 'pointer',
                      '&:hover': { background: 'rgba(55, 81, 255, 0.04)' },
                    }}
                    onClick={() => {
                      setCurrentId(row.id);
                      setActive(true);
                    }}
                  >
                    <TableCell sx={tableStyles.mainCell}>
                      <div style={tableStyles.mainCellImg}>
                        <img src={row.image} alt="user_avatar" />
                      </div>
                      <div>
                        <p style={tableStyles.cellTitle}>{row.details_text}</p>
                        <p style={tableStyles.cellText}>Updated 1 day ago</p>
                      </div>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
                      <p style={tableStyles.cellTitle}>{row.name}</p>
                      <p style={tableStyles.cellText}>on {'24.05.2019'}</p>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
                      <p style={tableStyles.cellTitle}>{row.date}</p>
                      <p style={tableStyles.cellText}>on {'6:30PM'}</p>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '10%', overflowX: 'auto' }} align="left">
                      <Priority status={row.status} />
                    </TableCell>
                    <TableCell sx={{ minWidth: '30px', width: '5%', overflowX: 'auto' }} align="left">
                      <BsThreeDotsVertical color="#C5C7CD" />
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
        <AddForm updateFunction={updateTicker} id={currentId} setActive={setActive} getItem={getItem} />
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
    overflowX: 'auto',
    gap: '24px',
    img: {
      height: '100%',
      borderRadius: '50%',
    },
  },
  mainCellImg: { width: '44px', borderRadius: '50%', overflow: 'hidden' },
  cellTitle: { fontSize: '14px', fontWeight: '600', lineHeight: '20px', marginBottom: '4px' },
  cellText: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#C5C7CD' },
};

export default TicketPage;
