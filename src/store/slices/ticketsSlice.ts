import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TickerItem } from '../../utils/consts';

export type TicketsState = {
  tickets: TickerItem[];
  loading: boolean;
  error: string;
};

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: '',
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    fetchAllTickets: (state) => {
      console.log('start');
      state.loading = true;
    },
    loadAllTickets: (state, action: PayloadAction<TickerItem[]>) => {
      state.tickets = action.payload;
      state.loading = false;
      state.error = '';
    },
    rejectAllTickets: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateTickets: (state, action: PayloadAction<TickerItem>) => {
      const idx = state.tickets.findIndex((item) => item.id === action.payload.id);
      if (idx < 0) {
        state.tickets = [...state.tickets, action.payload];
      } else {
        state.tickets = [...state.tickets.slice(0, idx), action.payload, ...state.tickets.slice(idx + 1)];
      }
    },
    startDeleteTicket: (state) => {
      state.loading = true;
    },
    deleteTicket: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload);
      state.loading = false;
    },
    rejectDeleteTicket: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllTickets,
  loadAllTickets,
  rejectAllTickets,
  updateTickets,
  startDeleteTicket,
  deleteTicket,
  rejectDeleteTicket,
} = ticketsSlice.actions;
export default ticketsSlice.reducer;
