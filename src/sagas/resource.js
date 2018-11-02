import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';

function* load(action) {
  try {
    // yield put({ });
  } catch (error) {
    // yield put({ });
  }
}

function* resourceSaga() {
  yield takeLatest(types.LOAD_RESOURCES, load);
}

export default resourceSaga;
