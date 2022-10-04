import { CustomerItem } from '../../utils/consts';
import { CustomersActionTypes } from '../reducers/customersReducer';

export const fetchAllCustomers = () => {
  return {
    type: CustomersActionTypes.FETCH_CUSTOMERS_PENDING,
  };
};
export const loadAllCustomers = (customers: CustomerItem[]) => {
  return {
    type: CustomersActionTypes.FETCH_CUSTOMERS_FULLFILED,
    payload: customers,
  };
};

export const rejectAllCustomers = (error: string) => {
  return {
    type: CustomersActionTypes.FETCH_CUSTOMERS_REJECTED,
    payload: error,
  };
};

export const updateCustomers = (customer: CustomerItem) => {
  return {
    type: CustomersActionTypes.UPDATE_CUSTOMER,
    payload: customer,
  };
};

export const deleteCustomer = (id: number) => {
  return {
    type: CustomersActionTypes.DELETE_CUSTOMER,
    payload: id,
  };
};
