import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { CustomerItem } from '../../utils/consts';
import { getCustomerData } from '../../utils';

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

export const fetchCustomers = () => (dispatch: AppDispatch) => {
  dispatch(fetchAllCustomers());
  getCustomerData()
    .then((res) => {
      dispatch(loadAllCustomers(res));
    })
    .catch((e) => dispatch(rejectAllCustomers(e.message)));
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
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.customers = state.customers.filter((customer) => customer.id !== action.payload);
    },
  },
});

export const { fetchAllCustomers, loadAllCustomers, rejectAllCustomers, updateCustomer, deleteCustomer } =
  customersSlice.actions;
export default customersSlice.reducer;
