import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketsSlice';
import customersReducer from './slices/customersSlice';
import userSlice from './slices/userSlice';
const rootReducer = combineReducers({
  tickets: ticketsReducer,
  customers: customersReducer,
  user: userSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
