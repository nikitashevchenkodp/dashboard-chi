import { call, put, takeEvery } from 'redux-saga/effects';
import { getTickerData } from '../../utils';
import { startLoginUser, successLoginUser, rejectLoginUser } from '../slices/userSlice';
import { sagaActions } from './saga-actions';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* loginUserSaga() {
  try {
    yield put(startLoginUser());
    yield delay(1000);
    yield put(successLoginUser());
  } catch (e: any) {
    yield put(rejectLoginUser(e.message));
  }
}

export function* userWatcher() {
  yield takeEvery(sagaActions.LOGIN_USER_SAGA, loginUserSaga);
}
