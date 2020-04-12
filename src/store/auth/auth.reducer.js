import produce from 'immer';
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
      case types.LOGIN_LOAD:
        draft.loading = false;
        break;
      case types.LOGIN:
        draft.accessToken = payload.access;
        draft.isAuth = true;
        break;
      case types.CHECK_LOGIN:
        let token = cookies.get('KsadJwtToken');
        if (token) {
          draft.isAuth = true;
          draft.loading = false;
        }
        break;
      case types.LOGOUT:
        draft.accessToken = payload.accessToken;
        break;
      default:
        return state;
    }
  });
};
