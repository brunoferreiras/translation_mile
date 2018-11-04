import * as actions from '../../src/actions/resource';
import * as types from '../../src/actions/types';

describe('Resource Actions', () => {
  it('should create an action to get resources', () => {
    const expectedAction = {
      type: types.GET_RESOURCES
    };
    expect(actions.getResources()).toEqual(expectedAction);
  });

  it('should create an action to save resources in redux', () => {
    const expectedAction = {
      type: types.SAVE_RESOURCES,
      payload: {}
    };
    expect(actions.saveResources({})).toEqual(expectedAction);
  });
});
