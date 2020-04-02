import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Deliveries from '~/pages/Deliveries';
import Login from '~/pages/Login';
import Route from './Route';
import history from '~/services/history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/deliveries" component={Deliveries} isPrivate />
      </Switch>
    </Router>
  );
}
