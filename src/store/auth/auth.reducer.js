import produce from 'immer';
import _ from 'lodash';
import { keysToCamel } from 'utils';

import * as types from './auth.types';

const initialState = {
  accessToken: null,
  isAuth: null,
  loading: true,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.LOGIN:
        console.log(payload);
        draft.accessToken = payload.access;
        draft.isAuth = true;
        break;
      default:
        return state;
    }
  });
};
