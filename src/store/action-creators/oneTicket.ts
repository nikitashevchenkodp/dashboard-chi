import { OneTicketActionTypes } from "../reducers/oneTicketReducer";

export const fetchOneTicket = () => {
  return {
    type: OneTicketActionTypes.FETCH_ONETICKET_PENDING,
  };
};
export const loadOneTicket = (ticket: any) => {
  return {
    type: OneTicketActionTypes.FETCH_ONETICKET_FULLFILED,
    payload: ticket,
  };
};
export const rejectOneTicket = (error: string) => {
  return {
    type: OneTicketActionTypes.FETCH_ONETICKET_REJECTED,
    payload: error,
  };
};
