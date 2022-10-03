

export enum TicketsActionTypes {
  FETCH_TICKETS_PENDING = 'FETCH_TICKETS_PENDING',
  FETCH_TICKETS_FULLFILED = 'FETCH_TICKETS_FULLFILED',
  FETCH_TICKETS_REJECTED = 'FETCH_TICKETS_REJECTED',
  UPDATE_TICKET = 'UPDATE_ONETICKET',
  DELETE_TICKET = 'DELETE_TICKET',
}

export type TicketsState = {
    tickets: any[];
    loading: boolean;
    error: null | string;
}

type TicketsPendingAction = {
  type: TicketsActionTypes.FETCH_TICKETS_PENDING;
};
type TicketsFullfiledAction = {
  type: TicketsActionTypes.FETCH_TICKETS_FULLFILED;
  payload: any[]; 
};
type TicketsRejectedAction = {
  type: TicketsActionTypes.FETCH_TICKETS_REJECTED;
  payload: string;
};
type UpdateTicketAction = {
  type: TicketsActionTypes.UPDATE_TICKET;
  payload: any;
};
type DeleteTicketAction = {
  type: TicketsActionTypes.DELETE_TICKET;
  payload: number;
};


export type TicketsAction =
  | TicketsPendingAction
  | TicketsFullfiledAction
  | TicketsRejectedAction
  | UpdateTicketAction
  | DeleteTicketAction;

const initialState: TicketsState = {
    tickets: [],
    loading: false,
    error: null,
}

const updateTicker = (state: TicketsState,ticket: any) => {
  const idx = state.tickets.findIndex((item) => item.id === ticket.id);
  if (idx < 0) {
    return { ...state, tickets: [...state.tickets, ticket] };
  } else {
    return {...state, tickets: [...state.tickets.slice(0, idx), ticket, ...state.tickets.slice(idx + 1)]}
  }
};

 const deleteTicket = (state: TicketsState, id: number) => {
   const idx = state.tickets.findIndex((item) => item.id === id);
   return { ...state, tickets: [...state.tickets.slice(0, idx), ...state.tickets.slice(idx + 1)] };
 };

export const ticketsReducer = (state = initialState, action: TicketsAction): TicketsState => {
  switch (action.type) {
    case TicketsActionTypes.FETCH_TICKETS_PENDING:
      return { loading: true, error: null, tickets: [] };
    case TicketsActionTypes.FETCH_TICKETS_FULLFILED:
      return { loading: false, error: null, tickets: action.payload };
    case TicketsActionTypes.FETCH_TICKETS_REJECTED:
      return { loading: true, error: action.payload, tickets: [] };
    case TicketsActionTypes.UPDATE_TICKET:
      return updateTicker(state, action.payload);
    case TicketsActionTypes.DELETE_TICKET:
      return deleteTicket(state, action.payload)
    default:
      return state;
  }
};