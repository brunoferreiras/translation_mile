import { all, fork } from 'redux-saga/effects';
import resourceSaga from './resource';

export default function* rootSaga() {
  yield all([fork(resourceSaga)]);
}
