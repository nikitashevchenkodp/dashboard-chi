import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerItem } from '../../utils/consts';

export type CustomersState = {
  customers: CustomerItem[];
  loading: boolean;
  error: string;
};

const initialState: CustomersState = {
  customers: [],
  loading: false,
  error: '',
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    fetchAllCustomers: (state) => {
      console.log('start');
      state.loading = true;
    },
    loadAllCustomers: (state, action: PayloadAction<CustomerItem[]>) => {
      state.customers = action.payload;
      state.loading = false;
      state.error = '';
    },
    rejectAllCustomers: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCustomer: (state, action: PayloadAction<CustomerItem>) => {
      const idx = state.customers.findIndex((item) => item.id === action.payload.id);
      if (idx < 0) {
        state.customers = [...state.customers, action.payload];
      } else {
        state.customers = [...state.customers.slice(0, idx), action.payload, ...state.customers.slice(idx + 1)];
      }
    },
    startDeleteCustomer: (state) => {
      state.loading = true;
    },
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.customers = state.customers.filter((customer) => customer.id !== action.payload);
      state.loading = false;
    },
    rejectDeleteCustomer: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllCustomers,
  loadAllCustomers,
  rejectAllCustomers,
  updateCustomer,
  startDeleteCustomer,
  deleteCustomer,
  rejectDeleteCustomer,
} = customersSlice.actions;
export default customersSlice.reducer;
