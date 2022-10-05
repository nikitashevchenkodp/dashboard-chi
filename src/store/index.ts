import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketsSlice';
import customersReducer from './slices/customersSlice';
import userReducer from './slices/userSlice';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';
const rootReducer = combineReducers({
  tickets: ticketsReducer,
  customers: customersReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
};

export const store = setupStore();
sagaMiddleware.run(rootWatcher);
console.log(store.getState().user);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
