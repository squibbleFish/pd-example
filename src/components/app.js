import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import Dashboard from '../containers/dashboard';
import Preview from './preview';
import NotFound from './not-found';

import logo from '../images/pagedip-logo.png';
import './app.css';

export default function App() {
  return (
    <div
      className="App">
      <Switch>
        <Route
          path="/theme/:id"
          component={Preview}/>
        <Route
          path="/"
          component={Dashboard}
          exact={true}/>
        <Route
          path="*"
          component={NotFound}/>
      </Switch>
      <header
        className="App-header">
        <Link
          to="/">
          <img
            src={logo}
            className="App-logo"
            alt="logo"/>
        </Link>
        <h1
          className="App-title">
          Theme Picker
        </h1>
      </header>
      <div className="App-intro">
      </div>
    </div>
  );
}
