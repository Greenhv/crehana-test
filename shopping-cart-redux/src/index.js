import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Checkout from './containers/Checkout';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { history, default as configureStore } from './redux/configureStore';
import { loadProducts } from './redux/modules/product';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

const store = configureStore();

store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/check-out" component={Checkout} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
  );
registerServiceWorker();
