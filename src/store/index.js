import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

export default createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
