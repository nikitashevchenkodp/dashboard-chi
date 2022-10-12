import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomerItem } from '../../utils/consts';
import {
  fetchAllCustomers,
  loadAllCustomers,
  rejectAllCustomers,
  startDeleteCustomer,
  deleteCustomer,
  rejectDeleteCustomer,
  addCustomer,
  editCustomer,
} from '../slices/customersSlice';
import { sagaActions } from './saga-actions';
import DashbordApiService from '../../services/DashboardApiService';

const dashboardApi = new DashbordApiService();

function* fetchCustomersSaga() {
  try {
    yield put(fetchAllCustomers());
    const result: CustomerItem[] = yield call(dashboardApi.getCustomers);
    yield put(loadAllCustomers(result));
  } catch (e: any) {
    yield put(rejectAllCustomers(e.message));
  }
}

function* deleteItemCSaga(action: any) {
  try {
    yield put(startDeleteCustomer());
    yield call(dashboardApi.delCustomer, action.payload);
    yield put(deleteCustomer(action.payload));
  } catch (e: any) {
    yield put(rejectDeleteCustomer(e.message));
  }
}

function* addCustomerSaga(action: any) {
  try {
    yield put(fetchAllCustomers());
    const res: CustomerItem = yield call(dashboardApi.addCustomer, action.payload);
    yield put(addCustomer(res));
  } catch (e: any) {
    yield put(rejectDeleteCustomer(e.message));
  }
}

function* editCustomerSaga(action: any) {
  try {
    const res: CustomerItem = yield call(dashboardApi.editCustomer, action.payload);
    yield put(editCustomer(res));
  } catch (e: any) {
    yield put(rejectDeleteCustomer(e.message));
  }
}

export function* customersWatcher() {
  yield takeEvery(sagaActions.FETCH_CUSTOMERS_SAGA, fetchCustomersSaga);
  yield takeEvery(sagaActions.DELETE_CUSTOMER_SAGA, deleteItemCSaga);
  yield takeEvery(sagaActions.ADD_CUSTOMER_SAGA, addCustomerSaga);
  yield takeEvery(sagaActions.EDIT_CUSTOMER_SAGA, editCustomerSaga);
}
