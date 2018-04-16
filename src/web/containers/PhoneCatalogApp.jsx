import React from "react";
import { HashRouter , Switch } from 'react-router-dom';
import Routes from './routes';

class PhoneCatalogApp extends React.PureComponent {
  render() {
    return( 
      <HashRouter outer>
        <Switch>
          {Routes()}
        </Switch>
      </HashRouter>
    )
  }
}

export default PhoneCatalogApp;