import React from 'react';
import './TicketsPage.scss';
import filter from '../../asset/filter.svg';
import sort from '../../asset/sort.svg';
import styled from 'styled-components';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import user1 from '../../asset/customers_avatarr/customer_1.svg';
import user2 from '../../asset/customers_avatarr/customer_2.svg';
import user3 from '../../asset/customers_avatarr/customer_3.svg';
import user4 from '../../asset/customers_avatarr/customer_4.svg';
import user5 from '../../asset/customers_avatarr/customer_5.svg';
import user6 from '../../asset/customers_avatarr/customer_6.svg';
import user7 from '../../asset/customers_avatarr/customer_7.svg';
import user8 from '../../asset/customers_avatarr/customer_8.svg';
import Priority from '../../components/Priority';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type TickerItem = {
  id: number;
  image: any;
  details_text: string;
  name: string;
  date: string;
  status: 'high' | 'low' | 'normal';
  update: {
    date: string;
    time: string;
  };
};

const TicketPage = () => {
  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const cellTitles = ['Ticket details', 'Customer name', 'Date', 'Priority'];

  const bodyData: TickerItem[] = [
    {
      id: 1,
      image: user1,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'high',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
    {
      id: 2,
      image: user2,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'low',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
    {
      id: 3,
      image: user3,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'normal',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
    {
      id: 4,
      image: user4,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'high',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
    {
      id: 5,
      image: user5,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'high',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
    {
      id: 6,
      image: user6,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'high',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
    {
      id: 7,
      image: user7,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'high',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
    {
      id: 8,
      image: user8,
      details_text: 'Contact Email not Linked',
      name: 'Tom Cruise',
      date: 'May 26, 2019',
      status: 'high',
      update: {
        date: '24.05.2019',
        time: '6:30PM',
      },
    },
  ];

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  return (
    <div>
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
            <button className="controll-panel__add">+ Add ticker</button>
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
                {bodyData.map((row) => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={tableStyles.mainCell}>
                      <div style={tableStyles.mainCellImg}>
                        <img src={row.image} alt="user image" />
                      </div>
                      <div>
                        <p style={tableStyles.cellTitle}>{row.details_text}</p>
                        <p style={tableStyles.cellText}>Updated 1 day ago</p>
                      </div>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
                      <p style={tableStyles.cellTitle}>{row.name}</p>
                      <p style={tableStyles.cellText}>on {row.update.date}</p>
                    </TableCell>
                    <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
                      <p style={tableStyles.cellTitle}>{row.date}</p>
                      <p style={tableStyles.cellText}>on {row.update.time}</p>
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
          <div className="pagination">
            <div className="pagination__block">
              <p>Rows per page:</p>
              <select name="" id="">
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="pagination__block">
              <p>1-8 of 1240</p>
              <div className="pagination__control">
                <IoIosArrowBack />
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
