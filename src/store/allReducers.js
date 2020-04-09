import { combineReducers } from 'redux';
import { auth } from './auth';
// import { company } from '../company';

const allReducers = combineReducers({
  auth,
});

export default allReducers;
