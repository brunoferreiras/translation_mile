import * as types from '../actions/types';

const initialState = {
  resources: [],
  loading: false
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RESOURCES:
      return { ...state, loading: true };
    case types.SAVE_RESOURCES:
      return { ...state, resources: action.payload, loading: false };
    default:
      return state;
  }
};

export default resourceReducer;
