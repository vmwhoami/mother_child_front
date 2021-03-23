import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './components/App';

const history = createBrowserHistory();
const Routes = () => (
  <Router history={history}>
    <Route exact path="/" component={App} />
  </Router>
);
export default Routes;
