import { TableCell, TableRow } from '@mui/material';
import React, { FC } from 'react';
import { transformData } from '../../utils';
import { TickerItem } from '../../utils/consts';
import ItemMenu from '../ItemMenu';
import Priority from '../Priority';
import imgNotFound from '../../asset/image-not-found.png';

type TickerTableRowProps = {
  rowData: TickerItem;
  setDeleteItem: () => void;
  onEdit: () => void;
};

const TicketTableRow: FC<TickerTableRowProps> = ({ rowData, onEdit, setDeleteItem }) => {
  return (
    <TableRow sx={tableStyles.tableRowBody}>
      <TableCell>
        <div style={tableStyles.mainCell}>
          <div style={tableStyles.mainCellImg}>
            <img
              style={tableStyles.mainCellImgImg}
              src={rowData.image ? rowData.image : imgNotFound}
              alt="user_avatar"
            />
          </div>
          <div>
            <p style={tableStyles.cellTitle}>{rowData.details_text}</p>
            <p style={tableStyles.cellText}>Updated 1 day ago</p>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: '80px', width: '20%' }} align="left">
        <p style={tableStyles.cellTitle}>{rowData.name}</p>
        <p style={tableStyles.cellText}>on {'24.05.2019'}</p>
      </TableCell>
      <TableCell sx={{ minWidth: '80px', width: '20%' }} align="left">
        <p style={tableStyles.cellTitle}>{transformData(rowData.date)}</p>
        <p style={tableStyles.cellText}>on {'6:30PM'}</p>
      </TableCell>
      <TableCell sx={{ minWidth: '80px', width: '10%' }} align="left">
        <Priority status={rowData.status} />
      </TableCell>
      <TableCell sx={{ minWidth: '30px', width: '5%' }} align="left">
        <ItemMenu onEdit={onEdit} deleteItem={setDeleteItem} />
      </TableCell>
    </TableRow>
  );
};

export const tableStyles = {
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
  mainCellImg: { width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden' },
  cellTitle: { fontSize: '14px', fontWeight: '600', lineHeight: '20px', marginBottom: '4px' },
  cellText: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#C5C7CD' },
};

export default TicketTableRow;
