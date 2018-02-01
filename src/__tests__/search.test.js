import configureMockStore from 'redux-mock-store'
import * as actions from '../actions/search-actions'
import reducer from '../reducers/search-reducer';
import * as types from "../helpers/types";

const mockStore = configureMockStore();

describe('search functionality testing', () => {
  it('should supply a search term to filter themes', () => {
    const expected = { type: types.SEARCH_THEMES, payload: 'term' };
    const store = mockStore({
      search: { search: '' }
    });

    expect(store.dispatch(actions.searchThemes('term'))).toEqual(expected)
  });

  it('should return initial state', function () {
    const initialState = { search: { search: '' } };
    expect(reducer(undefined, initialState)).toEqual(initialState);
  });

  it('should handle SEARCH_THEMES', () => {
    const term = { search: 'The tortoise lays on its back' };
    const searchAction = {
      type: types.SEARCH_THEMES,
      payload: term.search
    }
    expect(
      reducer({}, searchAction)
    ).toEqual(term);
  })
});

