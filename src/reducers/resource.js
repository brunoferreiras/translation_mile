import * as types from '../actions/types';

const initialState = {
  resource: []
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_RESOURCES:
      return { ...state, resource: action.payload };
    default:
      return state;
  }
};

export default resourceReducer;
