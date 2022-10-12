import { call, put, takeEvery } from 'redux-saga/effects';
import { TickerItem } from '../../utils/consts';
import {
  fetchAllTickets,
  fetchAllTicketsSuccess,
  fetchAllTicketsReject,
  addTicket,
  addTicketSuccess,
  addTicketReject,
  editTicket,
  editTicketSuccess,
  editTicketReject,
  deleteTicket,
  deleteTicketSuccess,
  deleteTicketReject,
} from '../slices/ticketsSlice';
import DashbordApiService from '../../services/DashboardApiService';

const dashboardApi = new DashbordApiService();

function* fetchTicketsSaga() {
  try {
    const result: TickerItem[] = yield call(dashboardApi.getTickets);
    yield put(fetchAllTicketsSuccess(result));
  } catch (e: any) {
    yield put(fetchAllTicketsReject(e.message));
  }
}

function* deleteItemSaga(action: any) {
  try {
    yield call(dashboardApi.delTicket, action.payload);
    yield put(deleteTicketSuccess(action.payload));
  } catch (e: any) {
    yield put(deleteTicketReject(e.message));
  }
}

function* addTicketSaga(action: any) {
  try {
    const res: TickerItem = yield call(dashboardApi.addTicker, action.payload);
    yield put(addTicketSuccess(res));
  } catch (e: any) {
    yield put(addTicketReject(e.message));
  }
}

function* editTicketSaga(action: any) {
  try {
    const res: TickerItem = yield call(dashboardApi.editTicker, action.payload);
    console.log(res);
    yield put(editTicketSuccess(res));
  } catch (e: any) {
    yield put(editTicketReject(e.message));
  }
}

export function* ticketsWatcher() {
  yield takeEvery(fetchAllTickets.type, fetchTicketsSaga);
  yield takeEvery(deleteTicket.type, deleteItemSaga);
  yield takeEvery(addTicket.type, addTicketSaga);
  yield takeEvery(editTicket.type, editTicketSaga);
}
