import { combineReducers } from 'redux';
import { customersReducer } from './customersReducer';
import { ticketsReducer } from './tickertsReducer';

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  customers: customersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
