import produce from 'immer';
import _ from 'lodash';
import { keysToCamel } from 'utils';
import { cookies } from 'utils';

import * as types from './auth.types';

const initialState = {
  accessToken: null,
  isAuth: false,
  loading: true,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.LOGIN:
        draft.accessToken = payload.access;
        draft.isAuth = true;
        break;
      case types.CHECK_LOGIN:
        let token = cookies.get('KsadJwtToken');
        if (token) {
          draft.isAuth = true;
        }
        break;
      default:
        return state;
    }
  });
};
