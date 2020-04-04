import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Deliveries from '~/pages/Deliveries';
import Login from '~/pages/Login';
import NewDelivery from '~/pages/NewDelivery';
import Route from './Route';
import history from '~/services/history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/deliveries" exact component={Deliveries} isPrivate />
        <Route path="/deliveries/new" component={NewDelivery} isPrivate />
      </Switch>
    </Router>
  );
}
