import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import { tickerCellTitles } from '../../utils';
import { TickerItem } from '../../utils/consts';
import AddTickerForm from '../AddTickerForm';
import DeleteForm from '../DeleteForm';
import MainTable from '../MainTable';
import ModalWindow from '../ModalWindow';
import TicketTableRow from '../TicketTableRow/TicketTableRow';
import './TicketsTable.scss';
import { ticketsSelector } from '../../store/selectors';
import { deleteTicket, fetchAllTickets } from '../../store/slices/ticketsSlice';

const TicketsTable = () => {
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const deleteId = useRef<any>();

  const { tickets, loading } = useAppSelector(ticketsSelector);
  const dispatch = useAppDispatch();

  const setDeleteItem = (id: number) => {
    setConfirmActive(true);
    deleteId.current = id;
  };

  const deleteItem = () => {
    dispatch(deleteTicket(deleteId.current));
    setConfirmActive(false);
  };

  const onEdit = useCallback((id: number | null) => {
    setActive(true);
    setCurrentId(id);
  }, []);

  const onClose = () => {
    setActive(false);
    setCurrentId(null);
  };

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, []);

  const renderItem = useCallback((item: TickerItem) => {
    return (
      <TicketTableRow
        key={item.id}
        rowData={item}
        onEdit={() => onEdit(item.id)}
        setDeleteItem={() => setDeleteItem(item.id)}
      />
    );
  }, []);

  return (
    <>
      <MainTable
        data={tickets}
        loading={loading}
        sortCriterias={useMemo(() => ['name', 'date', 'priority'], [])}
        renderItem={renderItem}
        headerTitles={tickerCellTitles}
        onEdit={onEdit}
      />
      <ModalWindow active={active} setActive={setActive}>
        <AddTickerForm id={currentId} onClose={onClose} />
      </ModalWindow>
      <ModalWindow active={confirmActive} setActive={setConfirmActive}>
        <DeleteForm setConfirmActive={setConfirmActive} deleteItem={deleteItem} />
      </ModalWindow>
    </>
  );
};

export default TicketsTable;

const el = React.createElement('div', { className: 'hello' });
const elDiv = document.createElement('div');
console.dir(elDiv);
console.dir(el);
