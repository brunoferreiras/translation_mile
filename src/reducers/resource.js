import * as types from '../actions/types';

const initialState = {
  resources: []
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_RESOURCES:
      return { ...state, resources: action.payload };
    default:
      return state;
  }
};

export default resourceReducer;
