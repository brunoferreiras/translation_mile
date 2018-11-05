import { combineReducers } from 'redux';
import resourceReducer from './resource';

export default combineReducers({
  resource: resourceReducer
});