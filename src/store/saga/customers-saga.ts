import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomerItem } from '../../utils/consts';
import {
  fetchAllCustomersSuccess,
  fetchAllCustomersReject,
  deleteCustomer,
  deleteCustomerSuccess,
  deleteCustomerReject,
  editCustomer,
  editCustomerSuccess,
  editCustomerReject,
  addCustomer,
  addCustomerSuccess,
  addCustomerReject,
} from '../slices/customersSlice';
import { sagaActions } from './saga-actions';
import DashbordApiService from '../../services/DashboardApiService';

const dashboardApi = new DashbordApiService();

function* fetchCustomersSaga() {
  try {
    const result: CustomerItem[] = yield call(dashboardApi.getCustomers);
    yield put(fetchAllCustomersSuccess(result));
  } catch (e: any) {
    yield put(fetchAllCustomersReject(e.message));
  }
}

function* deleteItemCSaga(action: any) {
  try {
    yield put(deleteCustomer());
    yield call(dashboardApi.delCustomer, action.payload);
    yield put(deleteCustomerSuccess(action.payload));
  } catch (e: any) {
    yield put(deleteCustomerReject(e.message));
  }
}

function* addCustomerSaga(action: any) {
  try {
    yield put(addCustomer());
    const res: CustomerItem = yield call(dashboardApi.addCustomer, action.payload);
    yield put(addCustomerSuccess(res));
  } catch (e: any) {
    yield put(addCustomerReject(e.message));
  }
}

function* editCustomerSaga(action: any) {
  try {
    yield put(editCustomer());
    const res: CustomerItem = yield call(dashboardApi.editCustomer, action.payload);
    yield put(editCustomerSuccess(res));
  } catch (e: any) {
    yield put(editCustomerReject(e.message));
  }
}

export function* customersWatcher() {
  yield takeEvery('customers/fetchAllCustomers', fetchCustomersSaga);
  yield takeEvery(sagaActions.DELETE_CUSTOMER_SAGA, deleteItemCSaga);
  yield takeEvery(sagaActions.ADD_CUSTOMER_SAGA, addCustomerSaga);
  yield takeEvery(sagaActions.EDIT_CUSTOMER_SAGA, editCustomerSaga);
}
