import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../../src/actions/types';
import { getResourcesTest } from '../../src/api/resource';
import resourceSaga, { get } from '../../src/sagas/resource';

describe('Resource Saga', () => {
  it('should to receive take latest', () => {
    const generator = resourceSaga();

    expect(generator.next().value).toEqual(
      takeLatest(types.GET_RESOURCES, get)
    );

    expect(generator.next().done).toBeTruthy();
  });

  it('should to get the resources from API', () => {
    const generator = get();
    expect(generator.next().value).toEqual(call(getResourcesTest));

    expect(generator.next().value).toEqual(
      put({
        type: types.SAVE_RESOURCES,
        payload: undefined
      })
    );

    expect(generator.next().done).toBeTruthy();
  });

  it('should return exception when happen error in API', () => {
    const generator = get();
    expect(generator.next().value).toEqual(call(getResourcesTest));

    expect(generator.throw('error').value).toEqual(
      put({
        type: types.SAVE_RESOURCES_ERROR,
        payload: undefined
      })
    );

    expect(generator.next().done).toBeTruthy();
  });
});
