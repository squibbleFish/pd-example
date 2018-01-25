import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducers from '../reducers/combine';
import thunk from 'redux-thunk';

const state = {
  themes: [],
  search: ''
};

const middleware = [
  thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  state,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
