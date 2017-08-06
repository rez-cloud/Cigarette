import './styles/materialize-overrides';
//import './styles/fonts';
// scripts
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Application from './scripts/application';
import Utils from './scripts/infrastructure/utils';
import createStore from './scripts/store';
import { createBrowserHistory } from 'history';
import { loadProjects} from "./scripts/actions/projectActions";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createBrowserHistory();
const store = createStore(history);
store.dispatch(loadProjects());

$.extend(window.ciga, {
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
