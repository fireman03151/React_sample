import './es6-shims';
import Rx from 'rx';
import React from 'react';
import debug from 'debug';
import { Router } from 'react-router';
import {
  routerMiddleware,
  routerReducer as routing,
  syncHistoryWithStore
} from 'react-router-redux';
import { render } from 'redux-epic';
import { createHistory } from 'history';
import useLangRoutes from './utils/use-lang-routes';
import sendPageAnalytics from './utils/send-page-analytics.js';

import createApp from '../common/app';
import provideStore from '../common/app/provide-store';

// client specific sagas
import sagas from './sagas';

import {
  isColdStored,
  getColdStorage,
  saveToColdStorage
} from './cold-reload';

const isDev = Rx.config.longStackSupport = debug.enabled('fcc:*');
const log = debug('fcc:client');
const hotReloadTimeout = 5000;
const csrfToken = window.__fcc__.csrf.token;
const DOMContainer = document.getElementById('fcc');
const initialState = isColdStored() ?
  getColdStorage() :
  window.__fcc__.data;
initialState.app.csrfToken = csrfToken;

const serviceOptions = { xhrPath: '/services', context: { _csrf: csrfToken } };

const history = useLangRoutes(createHistory)();
sendPageAnalytics(history, window.ga);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const adjustUrlOnReplay = !!window.devToolsExtension;

const sagaOptions = {
  isDev,
  window,
  document: window.document,
  location: window.location,
  history: window.history
};

createApp({
    history,
    syncHistoryWithStore,
    syncOptions: { adjustUrlOnReplay },
    serviceOptions,
    initialState,
    middlewares: [ routerMiddleware(history) ],
    sagas: [...sagas ],
    sagaOptions,
    reducers: { routing },
    enhancers: [ devTools ]
  })
  .doOnNext(({ store }) => {
    if (module.hot && typeof module.hot.accept === 'function') {
      module.hot.accept('../common/app', function() {
        saveToColdStorage(store.getState());
        setTimeout(() => window.location.reload(), hotReloadTimeout);
      });
    }
  })
  .doOnNext(() => log('rendering'))
  .flatMap(({ props, store }) => render(
    provideStore(React.createElement(Router, props), store),
    DOMContainer
  ))
  .subscribe(
    () => debug('react rendered'),
    err => { throw err; },
    () => debug('react closed subscription')
  );
