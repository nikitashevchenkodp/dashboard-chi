import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser, loginUserSuccess, loginUserReject } from '../slices/userSlice';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const setUserToLocalStorage = () => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      firstName: 'Nikita',
      lastName: 'Shevchenko',
      address: 'sdfsdf sdfsdf sdf sdf sdf sdf sdf sdfd f',
      email: 'nrcsdfsdf@gmail.com',
    })
  );
};

function* loginUserSaga() {
  try {
    yield delay(1000);
    yield call(setUserToLocalStorage);
    yield put(loginUserSuccess());
  } catch (e: any) {
    yield put(loginUserReject(e.message));
  }
}

export function* userWatcher() {
  yield takeEvery(loginUser.type, loginUserSaga);
}
