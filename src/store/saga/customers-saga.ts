import { call, put, takeEvery } from 'redux-saga/effects';
import { getCustomerData } from '../../utils';
import { CustomerItem, delCustomer } from '../../utils/consts';
import {
  fetchAllCustomers,
  loadAllCustomers,
  rejectAllCustomers,
  startDeleteCustomer,
  deleteCustomer,
  rejectDeleteCustomer,
} from '../slices/customersSlice';
import { sagaActions } from './saga-actions';

function* fetchCustomersSaga() {
  try {
    yield put(fetchAllCustomers);
    const result: CustomerItem[] = yield call(getCustomerData);
    yield put(loadAllCustomers(result));
  } catch (e: any) {
    yield put(rejectAllCustomers(e.message));
  }
}

function* deleteItemCSaga(action: any) {
  try {
    yield put(startDeleteCustomer());
    yield call(delCustomer, action.payload);
    yield put(deleteCustomer(action.payload));
  } catch (e: any) {
    yield put(rejectDeleteCustomer(e.message));
  }
}

export function* customersWatcher() {
  yield takeEvery(sagaActions.FETCH_CUSTOMERS_SAGA, fetchCustomersSaga);
  yield takeEvery(sagaActions.DELETE_CUSTOMER_SAGA, deleteItemCSaga);
}
