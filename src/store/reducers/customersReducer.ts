import { CustomerItem } from '../../utils/consts';

export enum CustomersActionTypes {
  FETCH_CUSTOMERS_PENDING = 'FETCH_CUSTOMERS_PENDING',
  FETCH_CUSTOMERS_FULLFILED = 'FETCH_CUSTOMERS_FULLFILED',
  FETCH_CUSTOMERS_REJECTED = 'FETCH_CUSTOMERS_REJECTED',
  UPDATE_CUSTOMER = 'UPDATE_CUSTOMER',
  DELETE_CUSTOMER = 'DELETE_CUSTOMER',
}

export type CustomersState = {
  customers: CustomerItem[];
  loading: boolean;
  error: null | string;
};

type CustomersPendingAction = {
  type: CustomersActionTypes.FETCH_CUSTOMERS_PENDING;
};
type CustomersFullfiledAction = {
  type: CustomersActionTypes.FETCH_CUSTOMERS_FULLFILED;
  payload: CustomerItem[];
};
type CustomersRejectedAction = {
  type: CustomersActionTypes.FETCH_CUSTOMERS_REJECTED;
  payload: string;
};
type UpdateCustomerAction = {
  type: CustomersActionTypes.UPDATE_CUSTOMER;
  payload: CustomerItem;
};
type DeleteCustomerAction = {
  type: CustomersActionTypes.DELETE_CUSTOMER;
  payload: number;
};

export type CustomersAction =
  | CustomersPendingAction
  | CustomersFullfiledAction
  | CustomersRejectedAction
  | UpdateCustomerAction
  | DeleteCustomerAction;

const initialState: CustomersState = {
  customers: [],
  loading: false,
  error: null,
};

const updateCustomer = (state: CustomersState, customer: CustomerItem) => {
  const idx = state.customers.findIndex((item) => item.id === customer.id);
  if (idx < 0) {
    return { ...state, customers: [...state.customers, customer] };
  } else {
    return { ...state, customers: [...state.customers.slice(0, idx), customer, ...state.customers.slice(idx + 1)] };
  }
};

const deleteCustomer = (state: CustomersState, id: number) => {
  const idx = state.customers.findIndex((item) => item.id === id);
  return { ...state, customers: [...state.customers.slice(0, idx), ...state.customers.slice(idx + 1)] };
};

export const customersReducer = (state = initialState, action: CustomersAction): CustomersState => {
  switch (action.type) {
    case CustomersActionTypes.FETCH_CUSTOMERS_PENDING:
      return { loading: true, error: null, customers: [] };
    case CustomersActionTypes.FETCH_CUSTOMERS_FULLFILED:
      return { loading: false, error: null, customers: action.payload };
    case CustomersActionTypes.FETCH_CUSTOMERS_REJECTED:
      return { loading: true, error: action.payload, customers: [] };
    case CustomersActionTypes.UPDATE_CUSTOMER:
      return updateCustomer(state, action.payload);
    case CustomersActionTypes.DELETE_CUSTOMER:
      return deleteCustomer(state, action.payload);
    default:
      return state;
  }
};
