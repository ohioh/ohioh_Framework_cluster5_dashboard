import axios from 'axios';
import gatewayUrl from '../../settings';
import { message as antMessage } from 'antd';

const apiMiddleware = () => (next) => (action) => {
  next(action);

  const baseUrl = `${gatewayUrl.v1}`;
  const { api, successMessage, errorMessage } = action.meta || {};
  const { path, method = 'GET', data } = action.payload || {};

  if (!api) {
    return;
  }

  if (api && !path) {
    throw new Error(`'path' not specified for api action ${action.type}`);
  }

  const url = baseUrl + path;

  return axios({ method, url, data })
    .then((res) => {
      next({
        type: `${action.type}_SUCCESS`,
        payload: res.data,
        meta: action.meta,
      });
      successMessage && antMessage.success(successMessage);
    })
    .catch((error) => {
      antMessage.error(
        error.response.data.message.error ||
          errorMessage ||
          'Something went wrong'
      );
      console.error(error);
      next({
        type: `${action.type}_FAILED`,
      });
    });
};

export default apiMiddleware;
