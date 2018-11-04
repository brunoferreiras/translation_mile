import * as actions from '../../src/actions/filter';
import * as types from '../../src/actions/types';

describe('Filter Actions', () => {
  it('should create an action to filter type contains', () => {
    const expectedAction = {
      type: types.FILTER_CONTAINS,
      payload: 'word'
    };
    expect(actions.filterContains('word')).toEqual(expectedAction);
  });

  it('should create an action to filter by language', () => {
    const expectedAction = {
      type: types.FILTER_BY_LANGUAGE,
      payload: 'PT'
    };
    expect(actions.filterByLanguage('PT')).toEqual(expectedAction);
  });

  it('should create an action to filter by module', () => {
    const expectedAction = {
      type: types.FILTER_BY_MODULE,
      payload: 'JME'
    };
    expect(actions.filterByModule('JME')).toEqual(expectedAction);
  });
});
