import * as types from './key.types';

export const getKey = () => ({
  type: types.GET_KEY,
  payload: {
    path: `/key-generator/keys/get`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});