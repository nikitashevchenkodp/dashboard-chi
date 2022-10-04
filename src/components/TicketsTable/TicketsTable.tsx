import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/typedDispatch';
import { RootState } from '../../store/reducers';
import { filterTickerFunction, sortFunctionTicker, tickerCellTitles } from '../../utils';
import { TickerItem } from '../../utils/consts';
import AddTickerForm from '../AddTickerForm';
import DeleteForm from '../DeleteForm';
import MainTable from '../MainTable';
import ModalWindow from '../ModalWindow';
import TicketTableRow from '../TicketTableRow/TicketTableRow';
import './TicketsTable.scss';

const TicketsTable = () => {
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const deleteId = useRef<any>();

  const { tickets, loading } = useSelector((state: RootState) => state.tickets);
  const { fetchTickets, deleteTicket } = useActions();

  const setDeleteItem = (id: number) => {
    setConfirmActive(true);
    deleteId.current = id;
  };

  const deleteItem = () => {
    deleteTicket(deleteId.current);
    setConfirmActive(false);
  };

  const onEdit = (id: number | null) => {
    setActive(true);
    setCurrentId(id);
  };

  useEffect(() => {
    console.log('work');
    fetchTickets();
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
