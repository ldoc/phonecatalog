import React from "react";
import { HashRouter , Switch } from 'react-router-dom';
import Routes from './routes';
import Header  from '../components/header';

class PhoneCatalogApp extends React.PureComponent {
  render() {
    return [
      <Header key='header'/>,
      <HashRouter outer key='router'>
        <Switch>
          {Routes()}
        </Switch>
      </HashRouter>
    ]
  }
}

export default PhoneCatalogApp;s