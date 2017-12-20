import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cart from './modules/cart';
import product from './modules/product';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const middleware = [thunk, logger, historyMiddleware];

const reducer = combineReducers({
  router: routerReducer,
  cart,
  product,
});

const store = () => createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;