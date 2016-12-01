import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from './reducers';
import Routes from './routes';

// ---
// FROM DAN ABRA:
// const thunk = (store) => (next) => (action) =>
//   typeof action === 'function' ?
//     action(store.dispatch) :
//     next(action);

// const configureStore = () => {
//   const middlewares = [thunk];
//   if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(createLogger());
//   }
// }
// ---

// FROM REDUX DOCS:
// const thunk = store => next => action =>
//   typeof action === 'function' ?
//     action(store.dispatch, store.getState) :
//     next(action);
// ---

// const middleware = [thunk, createLogger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ weatherApp: reducer }), {}, composeEnhancers(
  applyMiddleware(thunk),
  // applyMiddleware(...middleware),
));

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root'),
);
