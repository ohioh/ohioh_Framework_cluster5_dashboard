import { combineReducers } from 'redux';
import { auth } from './auth';
import { RESET_APP } from './auth/auth.types';
import { company } from './company';
import { survey } from './survey';

const allReducers = combineReducers({
  auth,
  company,
  survey,
});

export default (state, action) => {
  if (action.type === RESET_APP) {
    state = undefined;
  }
  return allReducers(state, action);
};
