//import './styles/materialize-overrides';
//import './styles/fonts';
// scripts
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Application from './scripts/application';
import Utils from './scripts/infrastructure/utils';
import createStore from './scripts/store';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const store = createStore(history);
 
$.extend(window.kpi, {
    store: store,
    getState: (partName) => store.getState()[partName], 
    history: history,
    utils: new Utils()
});

render(
    <Provider store={store}>
        <Application history={history} />
    </Provider>,
    document.getElementById('application')
);
