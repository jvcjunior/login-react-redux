import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { initAuth } from './core/auth';
import configureStore from './core/store';
import Root from './views/root';
import './styles/core.scss';


const store = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');

// ========================================================
// Render Setup
// ========================================================
function render() {
  ReactDOM.render(
    <AppContainer>
      <Root history={syncedHistory} store={store} />
    </AppContainer>,
    rootElement
  );
}

// ========================================================
// Render
// ========================================================

initAuth(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.error(error)); // eslint-disable-line no-console