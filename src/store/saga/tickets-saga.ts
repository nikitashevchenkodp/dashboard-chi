import { call, put, takeEvery } from 'redux-saga/effects';
import { TickerItem } from '../../utils/consts';
import {
  fetchAllTickets,
  loadAllTickets,
  rejectAllTickets,
  rejectDeleteTicket,
  startDeleteTicket,
  deleteTicket,
  addTicket,
  editTicket,
} from '../slices/ticketsSlice';
import { sagaActions } from './saga-actions';
import DashbordApiService from '../../services/DashboardApiService';

const dashboardApi = new DashbordApiService();

function* fetchTicketsSaga() {
  try {
    yield put(fetchAllTickets());
    const result: TickerItem[] = yield call(dashboardApi.getTickets);
    yield put(loadAllTickets(result));
  } catch (e: any) {
    yield put(rejectAllTickets(e.message));
  }
}

function* deleteItemSaga(action: any) {
  try {
    yield put(startDeleteTicket());
    yield call(dashboardApi.delTicket, action.payload);
    yield put(deleteTicket(action.payload));
  } catch (e: any) {
    yield put(rejectDeleteTicket(e.message));
  }
}

function* addTicketSaga(action: any) {
  try {
    const res: TickerItem = yield call(dashboardApi.addTicker, action.payload);
    yield put(addTicket(res));
  } catch (e: any) {
    yield put(rejectDeleteTicket(e.message));
  }
}

function* editTicketSaga(action: any) {
  try {
    const res: TickerItem = yield call(dashboardApi.editTicker, action.payload);
    console.log(res);
    yield put(editTicket(res));
  } catch (e: any) {
    yield put(rejectDeleteTicket(e.message));
  }
}

export function* ticketsWatcher() {
  yield takeEvery(sagaActions.FETCH_TICKETS_SAGA, fetchTicketsSaga);
  yield takeEvery(sagaActions.DELETE_TICKET_SAGA, deleteItemSaga);
  yield takeEvery(sagaActions.ADD_TICKET_SAGA, addTicketSaga);
  yield takeEvery(sagaActions.EDIT_TICKET_SAGA, editTicketSaga);
}
