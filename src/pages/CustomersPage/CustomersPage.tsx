import React, { useEffect, useRef, useState } from 'react';
import './CustomersPage.scss';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { CustomerItem, customersCellTitles, getCustomerData, paginationIndexes } from '../../utils/consts';
import ModalWindow from '../../components/ModalWindow';
import AddCustomerForm from '../../components/AddCustomerForm';
import Pagination from '../../components/Pagination';
import ControlPanel from '../../components/ControlPanel';
import { Button, Form } from '../../components';
import { FormTitle } from '../../components/Form/Form';

const CustomersPage = () => {
  const [customers, setCustomers] = useState<CustomerItem[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [perPage, setPerPage] = useState<number>(4);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const deleteFunc = useRef<any>();
  const paginationItems = Math.ceil(customers?.length / perPage);
  const [start, end] = paginationIndexes(page, perPage);

  const updateItem = (customer: CustomerItem) => {
    const idx = customers!.findIndex((item) => item.id === customer.id);
    if (idx < 0) {
      setCustomers((prevCustomers) => [...prevCustomers!, customer]);
    } else if (idx >= 0) {
      setCustomers((prevCustomers) => [...prevCustomers!.slice(0, idx), customer, ...prevCustomers!.slice(idx + 1)]);
    }
  };

  const deleteItem = (e: React.MouseEvent<SVGElement, MouseEvent>, id: number) => {
    e.stopPropagation();
    setConfirmActive(true);
    deleteFunc.current = () => {
      const idx = customers!.findIndex((item) => item.id === id);
      setCustomers((prevCustomers) => [...prevCustomers.slice(0, idx), ...prevCustomers.slice(idx + 1)]);
    };
  };

  function getCustomerItem(id: number) {
    const item = customers?.filter((item) => item.id === id)[0]!;
    return new Promise<CustomerItem>((resolve) => {
      resolve(item);
    });
  }

  useEffect(() => {
    getCustomerData().then((res) => setCustomers(res));
  }, []);

  return (
    <>
      <div className="container">
        <div className="white-container">
          <ControlPanel setSort={setSort} setCurrentId={setCurrentId} setActive={setActive} />
          <TableContainer className="table__container">
            <Table stickyHeader sx={{ minWidth: '1000px' }} aria-label="simple table">
              <TableHead sx={tableStyles.tHead}>
                <TableRow>
                  {customersCellTitles.map((title) => (
                    <TableCell key={title} sx={tableStyles.headCell} align="left">
                      {title}
                    </TableCell>
                  ))}
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers?.slice(start, end).map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      cursor: 'pointer',
                      '&:hover': { background: 'rgba(55, 81, 255, 0.04)' },
                      height: 'auto',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                    }}
                    onClick={() => {
                      setCurrentId(row.id);
                      setActive(true);
                    }}
                  >
                    <TableCell>
                      <div style={tableStyles.mainCell}>
                        <div style={tableStyles.mainCellImg}>
                          <img style={tableStyles.cellImg} src={row.image} alt="user_avatar" />
                        </div>
                        <div>
                          <p style={tableStyles.cellTitle}>
                            {row.first_name} {row.last_name}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
                      <p style={tableStyles.cellTitle}>{row.email}</p>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '30%', overflowX: 'auto' }} align="left">
                      <p style={tableStyles.cellTitle}>{row.address}</p>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '10%', overflowX: 'auto' }} align="left">
                      <p style={tableStyles.cellTitle}>{row.date}</p>
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
            count={customers?.length}
          />
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <AddCustomerForm
          updateFunction={updateItem}
          id={currentId}
          setActive={setActive}
          getCustomerItem={getCustomerItem}
        />
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
    minWidth: '200px',
    // overflowX: 'auto',
    gap: '24px',
  },
  cellImg: {
    height: '100%',
    borderRadius: '50%',
  },
  mainCellImg: { width: '44px', borderRadius: '50%', overflow: 'hidden' },
  cellTitle: { fontSize: '14px', fontWeight: '600', lineHeight: '20px', marginBottom: '4px' },
  cellText: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#C5C7CD' },
};

export default CustomersPage;
