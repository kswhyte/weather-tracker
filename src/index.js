import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from './reducers';
import Routes from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ weatherApp: reducer }), {}, composeEnhancers(
  applyMiddleware(thunk),
));

render(
  <Provider store={store}>
    <Routes history={hashHistory} />
  </Provider>,
  document.getElementById('root'),
);
