
const customMiddleware = store => next => (action) => {
  console.log('action', action);
  return isFunction(action) ? action(store.dispatch(), store.getState()) : next(action);
};

const isFunction = (action) => {
  return typeof action === 'function'
};

export default customMiddleware;