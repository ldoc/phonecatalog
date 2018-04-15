import { combineReducers } from 'redux';

const phoneCatalogApp = combineReducers({
  test: (state,action) => "Hi from test reducer"
});

export default phoneCatalogApp;