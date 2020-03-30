import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Deliveries from '../pages/Deliveries';
import Login from '../pages/Login';
import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/deliveries" component={Deliveries} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
