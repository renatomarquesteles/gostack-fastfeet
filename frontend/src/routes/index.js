import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Deliveries from '~/pages/Deliveries';
import Deliverymen from '~/pages/Deliverymen';
import Login from '~/pages/Login';
import NewDelivery from '~/pages/NewDelivery';
import NewDeliveryman from '~/pages/NewDeliveryman';
import Route from './Route';
import history from '~/services/history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/deliveries" exact component={Deliveries} isPrivate />
        <Route path="/deliveries/new" component={NewDelivery} isPrivate />
        <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
        <Route path="/deliverymen/new" component={NewDeliveryman} isPrivate />
      </Switch>
    </Router>
  );
}
