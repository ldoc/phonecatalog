import { combineReducers } from 'redux';
import { phones } from './phones';

const phoneCatalogApp = combineReducers({
  phones: phones
});

export default phoneCatalogApp;