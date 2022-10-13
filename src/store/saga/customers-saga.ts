import { call, put, select, takeEvery } from 'redux-saga/effects';
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
  fetchAllCustomers,
} from '../slices/customersSlice';
import DashbordApiService from '../../services/DashboardApiService';
import { sendPhoto } from '../../services/cloudinary';
import { RootState } from '..';

const dashboardApi = new DashbordApiService();

function* transformImageData(data: any): Generator<any, any, any> {
  if (typeof data.image !== 'string') {
    const response = yield call(sendPhoto, data.image);
    console.log(response);

    data = {
      ...data,
      image: response.url,
    };
  }
  return data;
}

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
    yield call(dashboardApi.delCustomer, action.payload);
    yield put(deleteCustomerSuccess(action.payload));
  } catch (e: any) {
    yield put(deleteCustomerReject(e.message));
  }
}

function* addCustomerSaga(action: any): Generator<any, any, any> {
  try {
    let data = action.payload;
    if (typeof data.image !== 'string') {
      const response = yield call(sendPhoto, data.image[0]);
      console.log(response);
      data = {
        ...data,
        image: response.url,
      };
    } else {
      data = {
        ...data,
        image: 'https://res.cloudinary.com/dmd6ckoob/image/upload/v1665658222/image-not-found_anrbg7.png',
      };
    }
    const res: CustomerItem = yield call(dashboardApi.addCustomer, data);
    yield put(addCustomerSuccess(res));
  } catch (e: any) {
    yield put(addCustomerReject(e.message));
  }
}

function* editCustomerSaga(action: any): Generator<any, any, any> {
  try {
    let data = action.payload;
    if (typeof data.image !== 'string') {
      const response = yield call(sendPhoto, data.image[0]);
      console.log(response);
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
