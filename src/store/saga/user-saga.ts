import { call, put, takeEvery } from 'redux-saga/effects';
import { startLoginUser, successLoginUser, rejectLoginUser } from '../slices/userSlice';
import { sagaActions } from './saga-actions';

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
    yield put(startLoginUser());
    yield delay(1000);
    yield call(setUserToLocalStorage);
    yield put(successLoginUser());
  } catch (e: any) {
    yield put(rejectLoginUser(e.message));
  }
}

export function* userWatcher() {
  yield takeEvery(sagaActions.LOGIN_USER_SAGA, loginUserSaga);
}
