import * as types from '../../src/actions/types';
import reducer from '../../src/reducers/resource';

describe('Resource Reducer', () => {
  let resources;
  let resourceJME;
  let resourceDEPOT;
  let state;

  beforeAll(() => {
    resources = [
      {
        resource: {
          created_at: '2011-05-12T20:09:39Z',
          updated_at: '2011-05-12T20:09:39Z',
          resource_id: 'Filter.Stop.Location.Description',
          module_id: 'JME',
          value:
            'There are still % events on queue. Do you really wish to reload the route?',
          language_id: 'en',
          user_modified: null
        }
      },
      {
        resource: {
          created_at: '2012-06-05T21:34:50Z',
          updated_at: '2012-06-05T21:34:50Z',
          resource_id: 'Filter.Stop.Location.Description',
          module_id: 'DEPOT',
          value: 'Acessórios marcados com * precisam ser preenchidos',
          language_id: 'pt',
          user_modified: null
        }
      }
    ];

    resourceJME = {
      resource: {
        created_at: '2011-05-12T20:09:39Z',
        updated_at: '2011-05-12T20:09:39Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'JME',
        value:
          'There are still % events on queue. Do you really wish to reload the route?',
        language_id: 'en',
        user_modified: null
      }
    };

    resourceDEPOT = {
      resource: {
        created_at: '2012-06-05T21:34:50Z',
        updated_at: '2012-06-05T21:34:50Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'DEPOT',
        value: 'Acessórios marcados com * precisam ser preenchidos',
        language_id: 'pt',
        user_modified: null
      }
    };

    state = {
      loading: false,
      resources: resources,
      filteredResources: resources,
      languages: ['EN', 'PT'],
      modules: ['JME', 'DEPOT']
    };
  });

  it('should return the initial state', () => {
    const expectedReducer = {
      resources: [],
      loading: false,
      filteredResources: [],
      languages: [],
      modules: []
    };
    expect(reducer(undefined, {})).toEqual(expectedReducer);
  });

  it('should handle GET_RESOURCES', () => {
    const expectedReducer = {
      loading: true
    };
    expect(
      reducer([], {
        type: types.GET_RESOURCES
      })
    ).toEqual(expectedReducer);
  });

  it('should handle SAVE_RESOURCES', () => {
    const expectedReducer = {
      loading: false,
      resources: resources,
      filteredResources: resources,
      languages: ['EN', 'PT'],
      modules: ['JME', 'DEPOT']
    };
    expect(
      reducer([], {
        type: types.SAVE_RESOURCES,
        payload: resources
      })
    ).toEqual(expectedReducer);
  });

  it('should handle FILTER_CONTAINS', () => {
    const expectedReducer = {
      loading: false,
      resources: resources,
      filteredResources: [resourceDEPOT],
      languages: ['EN', 'PT'],
      modules: ['JME', 'DEPOT']
    };

    expect(
      reducer(state, {
        type: types.FILTER_CONTAINS,
        payload: 'marcados'
      })
    ).toEqual(expectedReducer);
  });

  it('should handle FILTER_BY_LANGUAGE', () => {
    const expectedReducer = {
      loading: false,
      resources: resources,
      filteredResources: [resourceJME],
      languages: ['EN', 'PT'],
      modules: ['JME', 'DEPOT']
    };

    expect(
      reducer(state, {
        type: types.FILTER_BY_LANGUAGE,
        payload: 'EN'
      })
    ).toEqual(expectedReducer);
  });

  it('should handle FILTER_BY_MODULE', () => {
    const expectedReducer = {
      loading: false,
      resources: resources,
      filteredResources: [resourceDEPOT],
      languages: ['EN', 'PT'],
      modules: ['JME', 'DEPOT']
    };

    expect(
      reducer(state, {
        type: types.FILTER_BY_MODULE,
        payload: 'DEPOT'
      })
    ).toEqual(expectedReducer);
  });
});
