import * as filters from '../../src/utils/filters';
import { ALL } from '../../src/actions/types';

describe('Filters Utils', () => {
  let resources;

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
  });

  it('should to filter by contains in value', () => {
    const expected = [
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
      }
    ];
    expect(filters.filterContains('queue', resources)).toEqual(expected);

    expect(filters.filterContains('notfound', resources)).toEqual([]);

    expect(filters.filterContains('', resources)).toEqual(resources);
  });

  it('should to filter by language', () => {
    const expected = [
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
      }
    ];
    expect(filters.filterByLanguage('EN', resources)).toEqual(expected);

    expect(filters.filterByLanguage('language', resources)).toEqual([]);

    expect(filters.filterByLanguage('', resources)).toEqual([]);
  });

  it('should to filter by module', () => {
    const expected = [
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
    expect(filters.filterByModule('DEPOT', resources)).toEqual(expected);

    expect(filters.filterByModule('language', resources)).toEqual([]);

    expect(filters.filterByModule('', resources)).toEqual([]);
  });

  it('should to return the languages of resources', () => {
    const expected = ['EN', 'PT'];
    expect(filters.getLanguages(resources)).toEqual(expected);
  });

  it('should to return the modules of resources', () => {
    const expected = ['JME', 'DEPOT'];
    expect(filters.getModules(resources)).toEqual(expected);
  });

  it('should to return all resources when selected all languages', () => {
    expect(filters.filterByLanguage(ALL, resources)).toEqual(resources);
  });

  it('should to return all resources when selected all modules', () => {
    expect(filters.filterByModule(ALL, resources)).toEqual(resources);
  });
});
