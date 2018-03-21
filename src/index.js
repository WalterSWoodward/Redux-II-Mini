import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import './index.css';
import { App } from './components';

import { rootReducer } from './reducers';

// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

// The last middleware in the chain points to dispatch (action)
const sniffer = store => next => action => {
  console.group(action.type);
  console.log('Action: ', action)

  return next(action) // if this is the last middleware, next points to the dispatch - store.dispatch
  console.log('New State: ', store.getState())
  console.groupEnd()


};

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
