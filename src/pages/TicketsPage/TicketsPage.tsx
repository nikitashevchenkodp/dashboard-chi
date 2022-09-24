import React, { useEffect, useRef, useState } from 'react';
import './TicketsPage.scss';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { tickerCellTitles, getTickerData, paginationIndexes, TickerItem } from '../../utils/consts';
import ModalWindow from '../../components/ModalWindow';
import Pagination from '../../components/Pagination';
import Priority from '../../components/Priority';
import ControlPanel from '../../components/ControlPanel';
import AddTickerForm from '../../components/AddTickerForm';
import { Button, Form } from '../../components';
import { FormTitle } from '../../components/Form/Form';

const TicketPage = () => {
  const [tickers, setTickers] = useState<TickerItem[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState(1);
  const deleteFunc = useRef<any>();

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
    deleteFunc.current = () => {
      const idx = tickers!.findIndex((item) => item.id === id);
      setTickers((prevTickers) => [...prevTickers.slice(0, idx), ...prevTickers.slice(idx + 1)]);
    };
  };

  useEffect(() => {
    getTickerData().then((res) => setTickers(res));
  }, []);

  return (
    <>
      <div className="container">
        <div className="white-container">
          {/* controll panel start */}
          <ControlPanel setCurrentId={setCurrentId} setActive={setActive} />
          {/* controll panel end */}

          <TableContainer className="table__container">
            <Table sx={{ minWidth: '1000px' }} aria-label="simple table">
              <TableHead sx={tableStyles.tHead}>
                <TableRow>
                  {tickerCellTitles.map((title) => (
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
              if (deleteFunc.current) {
                deleteFunc.current();
              }
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
