import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducers from '../reducers/combine';
import thunk from 'redux-thunk';

const initialState = {
  themes: {},
  search: { search: '' }
};

const preloadedState = localStorage.getItem('state') ?
  JSON.parse(localStorage.getItem('state')) : initialState;

const middleware = [
  thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
