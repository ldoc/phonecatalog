import React from 'react';
import {Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/loading';

const LoadablePhoneList = Loadable({
  loader: () => import(
    './phoneList.jsx'),
  loading() {
    return <Loading/>
  }
});

const Routes = () => (
  [
    <Route exact path="/" component={LoadablePhoneList} key='home'/>,
    <Route exact path="/phone/:id" component={LoadablePhoneList} key='detail'/>
  ].map((r)=>r)
);

export default Routes;