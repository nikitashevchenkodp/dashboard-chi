import { call, CallEffect, put, PutEffect, select, SelectEffect, takeEvery } from 'redux-saga/effects';
import { CustomerItem, ImageResponse } from '../../utils/consts';
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
  fetchAllCustomers,
} from '../slices/customersSlice';
import { sendPhoto } from '../../services/cloudinary';
import { RootState } from '..';
import { dashboardApi } from '../../services/DashboardApiService';
import { AnyAction } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchCustomersSaga(): Generator<CallEffect<CustomerItem[]> | PutEffect<AnyAction>, void, CustomerItem[]> {
  try {
    const result = yield call(dashboardApi.getCustomers);
    yield put(fetchAllCustomersSuccess(result));
  } catch (e: any) {
    yield put(fetchAllCustomersReject(e.message));
  }
}

function* deleteItemCSaga(action: PayloadAction<number>): Generator<CallEffect | PutEffect<AnyAction>, void, void> {
  try {
    yield call(dashboardApi.delCustomer, action.payload);
    yield put(deleteCustomerSuccess(action.payload));
  } catch (e: any) {
    yield put(deleteCustomerReject(e.message));
  }
}

function* addCustomerSaga(
  action: PayloadAction<CustomerItem>
): Generator<CallEffect<CustomerItem> | PutEffect<AnyAction>, void, CustomerItem & ImageResponse> {
  try {
    let data = action.payload;
    if (typeof data.image !== 'string') {
      const response = yield call(sendPhoto, data.image[0]);
      data = {
        ...data,
        image: response.url,
      };
    } else {
      data = {
        ...data,
        image: '',
      };
    }
    const res = yield call(dashboardApi.addCustomer, data);
    yield put(addCustomerSuccess(res));
  } catch (e: any) {
    yield put(addCustomerReject(e.message));
  }
}

function* editCustomerSaga(
  action: PayloadAction<CustomerItem>
): Generator<CallEffect<CustomerItem> | SelectEffect | PutEffect<AnyAction>, void, CustomerItem & ImageResponse> {
  try {
    let data = action.payload;
    if (typeof data.image !== 'string') {
      const response = yield call(sendPhoto, data.image[0]);
      data = {
        ...data,
        image: response.url,
      };
    } else {
      const customer = yield select((state: RootState) =>
        state.customers.customers.find((item) => item.id === action.payload.id)
      );
      data = {
        ...data,
        image: customer.image,
      };
    }
    const res: CustomerItem = yield call(dashboardApi.editCustomer, data);
    yield put(editCustomerSuccess(res));
  } catch (e: any) {
    yield put(editCustomerReject(e.message));
  }
}

export function* customersWatcher() {
  yield takeEvery(fetchAllCustomers.type, fetchCustomersSaga);
  yield takeEvery(deleteCustomer.type, deleteItemCSaga);
  yield takeEvery(addCustomer.type, addCustomerSaga);
  yield takeEvery(editCustomer.type, editCustomerSaga);
}
