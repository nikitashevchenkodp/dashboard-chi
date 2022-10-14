import { TableCell, TableRow } from '@mui/material';
import React, { FC } from 'react';
import { transformData } from '../../utils';
import { CustomerItem } from '../../utils/consts';
import ItemMenu from '../ItemMenu';
import imgNotFound from '../../asset/image-not-found.png';
type TickerTableRowProps = {
  rowData: CustomerItem;
  setDeleteItem: () => void;
  onEdit: () => void;
};

const CustomerTableRow: FC<TickerTableRowProps> = ({ rowData, onEdit, setDeleteItem }) => {
  return (
    <TableRow sx={tableStyles.tableRowBody}>
      <TableCell>
        <div style={tableStyles.mainCell}>
          <div style={tableStyles.mainCellImg}>
            <img style={tableStyles.cellImg} src={rowData.image ? rowData.image : imgNotFound} alt="user_avatar" />
          </div>
          <div>
            <p style={tableStyles.cellTitle}>
              {rowData.first_name} {rowData.last_name}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ minWidth: '80px', width: '20%', overflowX: 'auto' }} align="left">
        <p style={tableStyles.cellTitle}>{rowData.email}</p>
      </TableCell>
      <TableCell sx={{ minWidth: '80px', width: '30%', overflowX: 'auto' }} align="left">
        <p style={tableStyles.cellTitle}>{rowData.address}</p>
      </TableCell>
      <TableCell sx={{ minWidth: '80px', width: '10%', overflowX: 'auto' }} align="left">
        <p style={tableStyles.cellTitle}>{transformData(rowData.date)}</p>
      </TableCell>
      <TableCell sx={{ minWidth: '30px', width: '5%', overflowX: 'auto' }} align="left">
        <ItemMenu onEdit={onEdit} deleteItem={setDeleteItem} />
      </TableCell>
    </TableRow>
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
    minWidth: '200px',
    gap: '24px',
  },
  cellImg: {
    height: '100%',
    borderRadius: '50%',
  },
  tableRowBody: {
    cursor: 'pointer',
    '&:hover': { background: 'rgba(55, 81, 255, 0.04)' },
    height: 'auto',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  mainCellImg: { width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden' },
  cellTitle: { fontSize: '14px', fontWeight: '600', lineHeight: '20px', marginBottom: '4px' },
  cellText: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#C5C7CD' },
};

export default CustomerTableRow;
