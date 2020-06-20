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

export const createKey = () => ({
  type: types.CREATE_KEY,
  payload: {
    path: `/key-generator/keys/create`,
    method: 'POST',
  },
  meta: {
    api: true,
  },
});
