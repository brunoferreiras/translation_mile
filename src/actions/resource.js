import * as types from '../actions/types';

export function saveResources(resources) {
  return {
    type: types.SAVE_RESOURCES,
    payload: resources
  };
}

export function getResources() {
  return {
    type: types.GET_RESOURCES
  };
}
