import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getResources as getResourcesAPI, getResourcesTest} from '../api/resource';

function* get(action) {
  try {
    const response = getResourcesTest();
    yield put({ type: types.SAVE_RESOURCES, payload: response});
    // const response = yield call(getResourcesAPI);
    // yield put({ type: types.SAVE_RESOURCES, payload: response.data});
  } catch (error) {
    console.log(error);
  }
}

function* resourceSaga() {
  yield takeLatest(types.GET_RESOURCES, get);
}

export default resourceSaga;
