/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';
import ApplicationContainer from 'containers/AppContainer';
import configureStore from 'store';

require('es6-promise').polyfill();
require('images/icons');

const history = createBrowserHistory();

const initialStoreState = {};
const store = configureStore(initialStoreState);

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} >
          <Route component={Component} path="/" />
        </Router >
      </Provider>
    </AppContainer>
    , document.getElementById('app'),
  );
};

renderApp(ApplicationContainer);

if (module.hot) {
  module.hot.accept('./containers/AppContainer.jsx', () => {
    const NextRootContainer = require('./containers/AppContainer.jsx').default;
    renderApp(NextRootContainer);
  });
}
