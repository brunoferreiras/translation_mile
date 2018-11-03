import * as types from '../actions/types';

export const filterContains = value => {
  return {
    type: types.FILTER_CONTAINS,
    payload: value
  };
};

export const filterByLanguage = language => {
  return {
    type: types.FILTER_BY_LANGUAGE,
    payload: language
  };
};

export const filterByModule = module => {
  return {
    type: types.FILTER_BY_MODULE,
    payload: module
  };
};
