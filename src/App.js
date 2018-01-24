import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Dashboard from './dashboard';
import Preview from './preview';
import NotFound from './not-found';

import logo from './pagedip-logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="App">
        <header
          className="App-header">
          <Link
            to="/">
            <img
              src={ logo }
              className="App-logo"
              alt="logo" />
          </Link>
          <h1
            className="App-title">
            Theme Picker
          </h1>
        </header>
        <div className="App-intro">
          <Switch>
            <Route
              path="/theme/:id"
              component={ Preview } />
            <Route
              path="/"
              component={ Dashboard }
              exact={ true } />
            <Route
              path="*"
              component={ NotFound } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
