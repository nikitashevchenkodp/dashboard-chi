import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser, loginUserSuccess, loginUserReject } from '../slices/userSlice';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* loginUserSaga() {
  try {
    yield delay(1000);
    yield put(loginUserSuccess());
  } catch (e: any) {
    yield put(loginUserReject(e.message));
  }
}

export function* userWatcher() {
  yield takeEvery(loginUser.type, loginUserSaga);
}
