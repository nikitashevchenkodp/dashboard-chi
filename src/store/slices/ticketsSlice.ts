import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TickerItem } from '../../utils/consts';

export type TicketsState = {
  tickets: TickerItem[];
  loading: boolean;
  error: string;
  ticketLoading: boolean;
  ticketError: string;
};

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: '',
  ticketLoading: false,
  ticketError: '',
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    fetchAllTickets: (state) => {
      console.log('start');
      state.loading = true;
    },
    fetchAllTicketsSuccess: (state, action: PayloadAction<TickerItem[]>) => {
      state.tickets = action.payload;
      state.loading = false;
      state.error = '';
    },
    fetchAllTicketsReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTicket: (state, action: PayloadAction<TickerItem>) => {
      state.ticketLoading = true;
    },
    addTicketSuccess: (state, action: PayloadAction<TickerItem>) => {
      state.tickets = [...state.tickets, action.payload];
      state.ticketLoading = false;
    },
    addTicketReject: (state, action: PayloadAction<string>) => {
      state.ticketError = action.payload;
      state.ticketLoading = false;
    },
    editTicket: (state, action: PayloadAction<TickerItem>) => {
      state.ticketLoading = true;
    },
    editTicketSuccess: (state, action: PayloadAction<TickerItem>) => {
      const idx = state.tickets.findIndex((item) => item.id === action.payload.id);
      state.tickets = [...state.tickets.slice(0, idx), action.payload, ...state.tickets.slice(idx + 1)];
      state.ticketLoading = false;
    },
    editTicketReject: (state, action: PayloadAction<string>) => {
      state.ticketError = action.payload;
      state.ticketLoading = false;
    },
    deleteTicket: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    deleteTicketSuccess: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload);
      state.loading = false;
    },
    deleteTicketReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllTickets,
  fetchAllTicketsSuccess,
  fetchAllTicketsReject,
  addTicket,
  addTicketSuccess,
  addTicketReject,
  editTicket,
  editTicketSuccess,
  editTicketReject,
  deleteTicket,
  deleteTicketSuccess,
  deleteTicketReject,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
