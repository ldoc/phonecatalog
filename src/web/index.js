import React from "react"; 
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import PhoneCatalogApp from "./containers/PhoneCatalogApp";
import appReducers from './reducers';
import { createStore } from 'redux';

// Creating store from reducers
const store = createStore(appReducers);

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <PhoneCatalogApp />
  </Provider>,
  document.getElementById('app')
);