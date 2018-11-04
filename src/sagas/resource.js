import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getResources as getResourcesAPI, getResourcesTest} from '../api/resource';

export function* get(action) {
  try {
    const response = yield call(getResourcesTest);
    yield put({ type: types.SAVE_RESOURCES, payload: response});
    // const response = yield call(getResourcesAPI);
    // yield put({ type: types.SAVE_RESOURCES, payload: response.data});
  } catch (error) {
    yield put({ type: types.SAVE_RESOURCES_ERROR, payload: error.message});
  }
}

function* resourceSaga() {
  yield takeLatest(types.GET_RESOURCES, get);
}

export default resourceSaga;
