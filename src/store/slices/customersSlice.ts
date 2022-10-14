import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { CustomerItem } from '../../utils/consts';

export type CustomersState = {
  customers: CustomerItem[];
  loading: boolean;
  error: string;
  customerLoading: boolean;
  customerError: string;
};

const initialState: CustomersState = {
  customers: [],
  loading: false,
  error: '',
  customerLoading: false,
  customerError: '',
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    fetchAllCustomers: (state) => {
      console.log('start');
      state.loading = true;
    },
    fetchAllCustomersSuccess: (state, action: PayloadAction<CustomerItem[]>) => {
      state.customers = action.payload;
      state.loading = false;
      state.error = '';
    },
    fetchAllCustomersReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    addCustomer: (state, action: PayloadAction<CustomerItem | FieldValues>) => {
      state.customerLoading = true;
    },
    addCustomerSuccess: (state, action: PayloadAction<CustomerItem>) => {
      state.customers = [...state.customers, action.payload];
      state.customerLoading = false;
    },
    addCustomerReject: (state, action: PayloadAction<string>) => {
      state.customerLoading = false;
      state.customerError = action.payload;
    },

    editCustomer: (state, action: PayloadAction<CustomerItem | FieldValues>) => {
      state.customerLoading = true;
    },
    editCustomerSuccess: (state, action: PayloadAction<CustomerItem>) => {
      const idx = state.customers.findIndex((item) => item.id === action.payload.id);
      state.customers = [...state.customers.slice(0, idx), action.payload, ...state.customers.slice(idx + 1)];
      state.customerLoading = false;
    },
    editCustomerReject: (state, action: PayloadAction<string>) => {
      state.customerLoading = true;
      state.customerError = action.payload;
    },
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    deleteCustomerSuccess: (state, action: PayloadAction<number>) => {
      state.customers = state.customers.filter((customer) => customer.id !== action.payload);
      state.loading = false;
    },
    deleteCustomerReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.customerError = action.payload;
    },
  },
});

export const {
  fetchAllCustomers,
  fetchAllCustomersSuccess,
  fetchAllCustomersReject,
  deleteCustomer,
  deleteCustomerSuccess,
  deleteCustomerReject,
  editCustomer,
  editCustomerSuccess,
  editCustomerReject,
  addCustomer,
  addCustomerSuccess,
  addCustomerReject,
} = customersSlice.actions;

export default customersSlice.reducer;
