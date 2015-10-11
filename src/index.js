import 'babel-core/polyfill';
import React from 'react';
import { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './App';
import reducers from './reducers';

const targetEl = document.getElementById('root');

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

let store = createStoreWithMiddleware(reducers);

React.render((
  <Provider store={store}>
    {() => <App />}
  </Provider>
), targetEl);
