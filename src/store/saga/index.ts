import { all } from 'redux-saga/effects';
import { customersWatcher } from './customers-saga';
import { ticketsWatcher } from './tickets-saga';
import { userWatcher } from './user-saga';

export function* rootWatcher() {
  yield all([customersWatcher(), ticketsWatcher(), userWatcher()]);
}
