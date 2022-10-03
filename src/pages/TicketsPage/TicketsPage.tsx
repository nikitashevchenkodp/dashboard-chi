import React, { useEffect, useMemo, useRef, useState } from 'react';
import './TicketsPage.scss';

import { AddTickerForm, ControlPanel, ModalWindow } from '../../components';

import { sortFunctionTicker, filterTickerFunction, tickerCellTitles, getTickerData } from '../../utils';

import DeleteForm from '../../components/DeleteForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useDispatch } from 'react-redux';
import { deleteTicket, fetchAllTickets, loadAllTickets, rejectAllTickets } from '../../store/action-creators/tickets';
import Loader from '../../components/Loader';
import TicketTableRow from '../../components/TicketTableRow/TicketTableRow';
import MainTable from '../../components/MainTable';

const TicketPage = () => {
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const deleteId = useRef<any>();

  const { tickets, loading } = useSelector((state: RootState) => state.tickets);
  const dispatch = useDispatch();

  const setDeleteItem = (id: number) => {
    setConfirmActive(true);
    deleteId.current = id;
  };

  const deleteItem = () => dispatch(deleteTicket(deleteId.current));

  useEffect(() => {
    dispatch(fetchAllTickets());
    getTickerData()
      .then((res) => {
        console.log('get result');
        dispatch(loadAllTickets(res));
      })
      .catch((e) => dispatch(rejectAllTickets(e.message)));
  }, [dispatch]);

  const sortedItems = useMemo(() => sortFunctionTicker(tickets, sort), [sort, tickets]);
  const filteredItems = useMemo(() => filterTickerFunction(sortedItems, filter), [sortedItems, filter]);

  return (
    <>
      <div className="container">
        <div className="white-container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <ControlPanel
                setSort={setSort}
                setCurrentId={setCurrentId}
                setActive={setActive}
                sortCriterias={['name', 'date', 'priority']}
                setFilter={setFilter}
                filter={filter}
              />
              <MainTable
                data={filteredItems}
                Component={TicketTableRow}
                headerTitles={tickerCellTitles}
                setDeleteItem={setDeleteItem}
                setCurrentId={setCurrentId}
                setActive={setActive}
              />
            </>
          )}
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <AddTickerForm id={currentId} setActive={setActive} />
      </ModalWindow>
      <ModalWindow active={confirmActive} setActive={setConfirmActive}>
        <DeleteForm setConfirmActive={setConfirmActive} deleteItem={deleteItem} />
      </ModalWindow>
    </>
  );
};

export default TicketPage;
