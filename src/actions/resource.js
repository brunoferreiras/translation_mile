import * as types from '../actions/types';

export const saveResources = resources => {
  return {
    type: types.SAVE_RESOURCES,
    payload: resources
  };
};

export const getResources = () => {
  return {
    type: types.GET_RESOURCES
  };
};
