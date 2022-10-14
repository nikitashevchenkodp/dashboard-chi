import { call, put, takeEvery, select, CallEffect, PutEffect, SelectEffect } from 'redux-saga/effects';
import { ImageResponse, TickerItem } from '../../utils/consts';
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
import { sendPhoto } from '../../services/cloudinary';
import { RootState } from '..';
import { dashboardApi } from '../../services/DashboardApiService';
import { AnyAction } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchTicketsSaga(): Generator<CallEffect<TickerItem[]> | PutEffect<AnyAction>, void, TickerItem[]> {
  try {
    const result: TickerItem[] = yield call(dashboardApi.getTickets);
    yield put(fetchAllTicketsSuccess(result));
  } catch (e: any) {
    yield put(fetchAllTicketsReject(e.message));
  }
}

function* deleteTicketSaga(action: PayloadAction<number>) {
  try {
    yield call(dashboardApi.delTicket, action.payload);
    yield put(deleteTicketSuccess(action.payload));
  } catch (e: any) {
    yield put(deleteTicketReject(e.message));
  }
}

function* addTicketSaga(
  action: PayloadAction<TickerItem>
): Generator<CallEffect<TickerItem> | PutEffect<AnyAction>, void, TickerItem & ImageResponse> {
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
    const res = yield call(dashboardApi.addTicker, data);
    yield put(addTicketSuccess(res));
  } catch (e: any) {
    yield put(addTicketReject(e.message));
  }
}

function* editTicketSaga(
  action: PayloadAction<TickerItem>
): Generator<CallEffect<TickerItem> | SelectEffect | PutEffect<AnyAction>, void, TickerItem & ImageResponse> {
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
      const ticket = yield select((state: RootState) =>
        state.tickets.tickets.find((item) => item.id === action.payload.id)
      );
      data = {
        ...data,
        image: ticket.image,
      };
    }
    const res: TickerItem = yield call(dashboardApi.editTicker, data);
    console.log(res);
    yield put(editTicketSuccess(res));
  } catch (e: any) {
    yield put(editTicketReject(e.message));
  }
}

export function* ticketsWatcher() {
  yield takeEvery(fetchAllTickets.type, fetchTicketsSaga);
  yield takeEvery(deleteTicket.type, deleteTicketSaga);
  yield takeEvery(addTicket.type, addTicketSaga);
  yield takeEvery(editTicket.type, editTicketSaga);
}
