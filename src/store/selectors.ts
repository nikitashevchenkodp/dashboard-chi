import { RootState } from './index';

export const ticketsSelector = (state: RootState) => state.tickets;
export const customersSelector = (state: RootState) => state.customers;
export const userSelector = (state: RootState) => state.user;
