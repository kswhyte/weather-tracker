import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';

const middleware = [thunk, createLogger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ weatherApp: reducer }), {}, composeEnhancers(
 applyMiddleware(...middleware)
));

render(
 <Provider store={store}>
   <Routes history={browserHistory} />
 </Provider>,
 document.getElementById('root')
)
