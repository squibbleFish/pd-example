import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { withRouter, Link } from 'react-router';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actions from '../actions/theme-actions';
import SearchBar from '../containers/search-bar';
import { Spinner } from '../components/spinner';

import * as types from "../helpers/types";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const mockedJson = [{
      owner:"_default",
      handle:"sidekick",
      type:"theme",
      guid:"e11ca530-fd63-11e7-a5be-e53eb9f02238",
      created:"2018-01-19T21:58:28.528Z",
      last_updated:"2018-01-19T21:58:31.792Z",
      title:"Sidekick",
      description:"A theme ready for action, with a hero cover image and a sidebar.",
      main:"73ac0428-8400-4202-abde-7ca1bf46ad09",
    },{
      owner:"_default",
      handle:"basic",
      type:"theme",
      guid:"0105e990-0604-11e7-ab3d-f395aec0a55e",
      created:"2017-03-11T02:39:52.567Z",
      last_updated:"2018-01-19T21:58:27.238Z",
      title:"Basic Theme",
      description:"A simple theme, for simple content.",
      main:"a4e8fad8-2027-4950-83c8-0bb9af7085b3",
    }];

describe('render dashboard', () => {
  it('fetch themes', () => {
    fetchMock
      .getOnce('/', { payload: mockedJson });

    const expected = { type: types.GET_THEMES, payload: { themes: mockedJson } };

    const store = mockStore({themes: { themes: [] } });
    return store.dispatch(actions.getThemes())
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  })
});