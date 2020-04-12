import axios from 'axios';
import _ from 'lodash';
import { message } from 'antd';
import baseUrl from 'settings';
import * as types from './auth.types';
import { cookies } from 'utils';

const login = async (payload) => {
  let url = `${baseUrl.v1}/auth/login`;

  const response = await axios.post(url, payload);
  return response.data;
};

export const Login = (payload) => {
  return async (dispatch) => {
    try {
      const data = await login(payload);
      const KsadJwtToken = data.access;

      cookies.set('KsadJwtToken', `${KsadJwtToken}`, { path: '/' });
      axios.defaults.headers.common['Authorization'] = `Bearer ${KsadJwtToken}`;

      return dispatch({
        type: types.LOGIN,
        payload: data,
      });
    } catch (error) {
      const err = _.get(
        error,
        'response.data.message.non_field_errors',
        'Please enter the correct username and password'
      );
      message.error(err);
    }
  };
};

export const CheckLogin = () => ({
  type: types.CHECK_LOGIN,
  meta: {
    api: false,
  },
});
