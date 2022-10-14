import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketsSlice';
import customersReducer from './slices/customersSlice';
import userReducer from './slices/userSlice';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  customers: customersReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false }), sagaMiddleware],
  });
};

export const store = setupStore();
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
console.log(store.getState().user);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
