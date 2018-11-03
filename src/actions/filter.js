import * as types from '../actions/types';

export const filterContains = value => {
  return {
    type: types.FILTER_CONTAINS,
    payload: value
  };
};
