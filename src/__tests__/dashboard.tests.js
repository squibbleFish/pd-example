import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import { Dashboard } from '../containers/dashboard';

const mockedJson = {
  themes: [{
    owner:"_default",
    handle:"sidekick",
    type:"theme",
    guid:"e11ca530-fd63-11e7-a5be-e53eb9f02238",
    created:"2018-01-19T21:58:28.528Z",
    last_updated:"2018-01-19T21:58:31.792Z",
    title:"Sidekick",
    description:"A theme ready for action, with a hero cover image and a sidebar.",
    main:"73ac0428-8400-4202-abde-7ca1bf46ad09",
  }]
};

const props = {
  getThemes: jest.fn(),
  themes: { themes: { mockedJson } },
  search: { search: '' },
};

describe('', () => {
  it('should render', function () {
    const wrapper = shallow(
      <Dashboard { ...props } />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a box to contain a single theme', function () {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({ search: { search: '' }, themes: { themes: mockedJson } });
    const wrapper = mount(
      <Provider store={store} >
        <MemoryRouter>
          <Dashboard { ...props } />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find('.theme-card')).toHaveLength(1);
  });
});
