import * as types from '../actions/types';
import { filterContains, getLanguages, getModules, filterByLanguage } from '../utils/filters';

const initialState = {
  resources: [],
  loading: false,
  filteredResources: [],
  languages: [],
  modules: []
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RESOURCES:
      return { ...state, loading: true };
    case types.SAVE_RESOURCES:
      return {
        ...state,
        resources: action.payload,
        filteredResources: action.payload,
        languages: getLanguages(action.payload),
        modules: getModules(action.payload),
        loading: false
      };
    case types.FILTER_CONTAINS:
      return {
        ...state,
        filteredResources: filterContains(action.payload, state.resources)
      };
    case types.FILTER_BY_LANGUAGE:
      return {
        ...state,
        filteredResources: filterByLanguage(action.payload, state.resources)
      }
    default:
      return state;
  }
};

export default resourceReducer;
