import { call, put, takeEvery } from 'redux-saga/effects';
import { getTickerData } from '../../utils';
import { delTicket, TickerItem } from '../../utils/consts';
import {
  fetchAllTickets,
  loadAllTickets,
  rejectAllTickets,
  rejectDeleteTicket,
  startDeleteTicket,
  deleteTicket,
} from '../slices/ticketsSlice';
import { sagaActions } from './saga-actions';

function* fetchTicketsSaga() {
  try {
    yield put(fetchAllTickets());
    const result: TickerItem[] = yield call(getTickerData);
    yield put(loadAllTickets(result));
  } catch (e: any) {
    yield put(rejectDeleteTicket(e.message));
  }
}

function* deleteItemSaga(action: any) {
  try {
    yield put(startDeleteTicket());
    yield call(delTicket, action.payload);
    yield put(deleteTicket(action.payload));
  } catch (e: any) {
    yield put(rejectAllTickets(e.message));
  }
}

export function* ticketsWatcher() {
  yield takeEvery(sagaActions.FETCH_TICKETS_SAGA, fetchTicketsSaga);
  yield takeEvery(sagaActions.DELETE_TICKET_SAGA, deleteItemSaga);
}
