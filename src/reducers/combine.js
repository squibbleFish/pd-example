import { combineReducers } from 'redux';
import themeReducer from './theme-reducer';
import searchReducer from './search-reducer';

const reducers = combineReducers({
  themes: themeReducer,
  search: searchReducer,
});

export default reducers;