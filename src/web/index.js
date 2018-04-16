import 'babel-polyfill';
import React from "react"; 
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import PhoneCatalogApp from "./containers/phoneCatalogApp";
import appReducers from './reducers';
import sagaPhones from './sagas/phones.js';
import { createStore , applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Creating store from reducers
const store = createStore(
  appReducers,
  applyMiddleware(sagaMiddleware)
);

// run only sagaPhones
sagaMiddleware.run(sagaPhones)

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <PhoneCatalogApp />
  </Provider>,
  document.getElementById('app')
);