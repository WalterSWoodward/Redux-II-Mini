import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import { App } from './components';
// import { FETCHED, FETCHING, ERROR } from './actions';

import rootReducer from './reducers/rootReducer';

// QUESTION: WHERE WILL WE USE THIS?? ON A HIGH LEVEL, WHAT IS GOING ON HERE?
// ANSWER:

// CUSTUM Logger???:
// everything goes through the SeNAte --  S.N.A
  // store gives access to the store
  // next is a pointer to the next middleware -- until the last middleware points to store.dispatch, which will dispatch to the reducers.
// const sniffer = store => next => action => {
//   console.group(action.type);
//   console.log('Action: ', action);

//   const result = next(action); // if this is the last middleware, next points to store.dispatch
//   console.log('New State: ', store.getState());

//   console.groupEnd();

//   return result;
// };

const middleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
