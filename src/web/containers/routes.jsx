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

const LoadablePhoneDetail = Loadable({
  loader: () => import(
    '../components/phoneDetail.jsx'),
  loading() {
    return <Loading/>
  }
});

const Routes = () => (
  [
    <Route exact path="/" component={LoadablePhoneList} key='home'/>,
    <Route exact path="/phone" component={LoadablePhoneDetail} key='detail'/>
  ].map((r)=>r)
);

export default Routes;