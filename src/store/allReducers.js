import { combineReducers } from 'redux';
import { auth } from './auth';
import { RESET_APP } from './auth/auth.types';
// import { company } from '../company';

const allReducers = combineReducers({
  auth,
});

export default (state, action) => {
  if (action.type === RESET_APP) {
    state = undefined;
  }
  return allReducers(state, action);
};
