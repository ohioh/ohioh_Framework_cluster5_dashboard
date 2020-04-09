import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from './middleware/apiMiddleware';
import allReducers from './allReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store;

const middlewares = [thunk, apiMiddleware];

function Root({ children, initialState = {} }) {
  store = createStore(
    allReducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return <Provider store={store}>{children}</Provider>;
}

export default Root;
