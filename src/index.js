import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import store from "./helpers/store";

import { App } from './components/app';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const history = createHistory({ basename: '/' });

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={ history }>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
