import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

export default () => {
  const store = createStore(reducer, composeWithDevTools());

  return store;
};
