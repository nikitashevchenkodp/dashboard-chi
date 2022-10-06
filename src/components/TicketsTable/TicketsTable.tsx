import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import { filterTickerFunction, sortFunctionTicker, tickerCellTitles } from '../../utils';
import { TickerItem } from '../../utils/consts';
import AddTickerForm from '../AddTickerForm';
import DeleteForm from '../DeleteForm';
import MainTable from '../MainTable';
import ModalWindow from '../ModalWindow';
import TicketTableRow from '../TicketTableRow/TicketTableRow';
import './TicketsTable.scss';
import { ticketsSelector } from '../../store/selectors';
import { sagaActions } from '../../store/saga/saga-actions';

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
    dispatch({ type: sagaActions.DELETE_TICKET_SAGA, payload: deleteId.current });
    setConfirmActive(false);
  };

  const onEdit = (id: number | null) => {
    setActive(true);
    setCurrentId(id);
  };

  useEffect(() => {
    console.log('work');
    dispatch({ type: sagaActions.FETCH_TICKETS_SAGA });
  }, []);

  const renderItem = (item: TickerItem) => {
    return (
      <TicketTableRow
        key={item.id}
        rowData={item}
        onEdit={() => onEdit(item.id)}
        setDeleteItem={() => setDeleteItem(item.id)}
      />
    );
  };

  return (
    <>
      <MainTable
        data={tickets}
        loading={loading}
        sortCriterias={['name', 'date', 'priority']}
        sortFunction={sortFunctionTicker}
        filterFunction={filterTickerFunction}
        renderItem={renderItem}
        headerTitles={tickerCellTitles}
        onEdit={onEdit}
      />
      <ModalWindow active={active} setActive={setActive}>
        <AddTickerForm id={currentId} setActive={setActive} />
      </ModalWindow>
      <ModalWindow active={confirmActive} setActive={setConfirmActive}>
        <DeleteForm setConfirmActive={setConfirmActive} deleteItem={deleteItem} />
      </ModalWindow>
    </>
  );
};

export default TicketsTable;
