import { call, put, takeEvery, select } from 'redux-saga/effects';
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
import { sendPhoto } from '../../services/cloudinary';
import { RootState } from '..';

const dashboardApi = new DashbordApiService();

// function* transformImageData(data: any): Generator<any, any, any> {
//   if (typeof data.image !== 'string') {
//     const response = yield call(sendPhoto, data.image[0]);
//     console.log(response);
//     data = {
//       ...data,
//       image: response.url,
//     };
//   } else if (data.image) {
//   }
//   return data;
// }

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

function* addTicketSaga(action: any): Generator<any, any, any> {
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
    const res: TickerItem = yield call(dashboardApi.addTicker, data);
    yield put(addTicketSuccess(res));
  } catch (e: any) {
    yield put(addTicketReject(e.message));
  }
}

function* editTicketSaga(action: any): Generator<any, any, any> {
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
  yield takeEvery(deleteTicket.type, deleteItemSaga);
  yield takeEvery(addTicket.type, addTicketSaga);
  yield takeEvery(editTicket.type, editTicketSaga);
}
