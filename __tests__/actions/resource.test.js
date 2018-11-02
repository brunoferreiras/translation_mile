import * as actions from '../../src/actions/resource';
import * as types from '../../src/actions/types';

describe('Actions Resource', () => {
  it('should create an action to get resources', () => {
    const expectedAction = {
      type: types.LOAD_RESOURCES
    };
    expect(actions.loadResources()).toEqual(expectedAction);
  });
});
