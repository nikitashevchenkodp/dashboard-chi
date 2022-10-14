import { CustomerItem, TickerItem } from '../utils/consts';
import { RootState } from './index';

export const ticketsSelector = (state: RootState) => state.tickets;
export const ticketById = (state: RootState, id: number | null): TickerItem =>
  state.tickets.tickets.filter((item) => item.id === id)[0];
export const customerById = (state: RootState, id: number | null): CustomerItem =>
  state.customers.customers.filter((item) => item.id === id)[0];
export const customersSelector = (state: RootState) => state.customers;
export const userSelector = (state: RootState) => state.user;
