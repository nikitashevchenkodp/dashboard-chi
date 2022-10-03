export enum OneTicketActionTypes {
  FETCH_ONETICKET_PENDING = 'FETCH_ONETICKET_PENDING',
  FETCH_ONETICKET_FULLFILED = 'FETCH_ONETICKET_FULLFILED',
  FETCH_ONETICKET_REJECTED = 'FETCH_ONETICKET_REJECTED',
}

export type OneTicketState = {
  ticket: any;
  loading: boolean;
  error: null | string;
};


type OneTicketPendingAction = {
  type: OneTicketActionTypes.FETCH_ONETICKET_PENDING;
};
type OneTicketFullfiledAction = {
  type: OneTicketActionTypes.FETCH_ONETICKET_FULLFILED;
  payload: any;
};
type OneTicketRejectedAction = {
  type: OneTicketActionTypes.FETCH_ONETICKET_REJECTED;
  payload: string;
};

export type OneTicketAction =
  | OneTicketPendingAction
  | OneTicketFullfiledAction
  | OneTicketRejectedAction;

const initialState: OneTicketState = {
  ticket: {},
  loading: false,
  error: null,
};

  export const oneTicketReducer = (state = initialState, action: OneTicketAction): OneTicketState => {
    switch (action.type) {
      case OneTicketActionTypes.FETCH_ONETICKET_PENDING:
        return { loading: true, error: null, ticket: {} };
      case OneTicketActionTypes.FETCH_ONETICKET_FULLFILED:
        return { loading: false, error: null, ticket: action.payload };
      case OneTicketActionTypes.FETCH_ONETICKET_REJECTED:
        return { loading: true, error: action.payload, ticket: {} };
      default:
        return state;
    }
  };