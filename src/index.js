import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import store from "./helpers/store";

import App from './components/app';
import { CACHE_KEY } from "./helpers/config";
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const history = createHistory({ basename: '/' });

store.subscribe(() => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(store.getState()));
});

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
