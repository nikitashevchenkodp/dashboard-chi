import { Dispatch } from 'react';
import { getTickerData } from '../../utils';
import { TicketsAction, TicketsActionTypes } from '../reducers/tickertsReducer';

export const fetchAllTickets = (): TicketsAction => {
  return {
    type: TicketsActionTypes.FETCH_TICKETS_PENDING,
  };
};
export const loadAllTickets = (tickets: any[]): TicketsAction => {
  return {
    type: TicketsActionTypes.FETCH_TICKETS_FULLFILED,
    payload: tickets,
  };
};

export const rejectAllTickets = (error: string): TicketsAction => {
  return {
    type: TicketsActionTypes.FETCH_TICKETS_REJECTED,
    payload: error,
  };
};

export const updateTickets = (ticket: any): TicketsAction => {
  return {
    type: TicketsActionTypes.UPDATE_TICKET,
    payload: ticket,
  };
};

export const deleteTicket = (id: number): TicketsAction => {
  return {
    type: TicketsActionTypes.DELETE_TICKET,
    payload: id,
  };
};

export const fetchTickets = () => (dispatch: Dispatch<TicketsAction>) => {
  dispatch(fetchAllTickets());
  getTickerData()
    .then((res) => {
      dispatch(loadAllTickets(res));
    })
    .catch((e) => dispatch(rejectAllTickets(e.message)));
};
