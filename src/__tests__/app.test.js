import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import App from '../components/app';

const mockStore = configureMockStore();

const store = mockStore({ theme: {}, search: {} });

describe( 'App', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Router history={ createHistory( { basename: '/'} ) }>
          <App/>
        </Router>
      </Provider>
    );
  });
});


