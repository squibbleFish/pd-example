import configureMockStore from 'redux-mock-store'
import * as actions from '../actions/search-actions'
import fetchMock from 'fetch-mock'
import { SEARCH_THEMES } from "../helpers/types";

const mockStore = configureMockStore();

describe('search actions', () => {
  it('supplies a search term to filter themes', () => {
    const action = { type: SEARCH_THEMES, payload: 'term' };

    const store = mockStore({
      search: { search: '' }
    });

    // expect(store.dispatch(actions.searchThemes('term')))
  });
});

