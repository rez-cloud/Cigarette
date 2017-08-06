import { GO_TO_VIEW } from '../actionTypes';

import { views } from '../routes';

export function goToView(viewName, params) {
    const view = views[viewName];
    if (!view) {
        return;
    }
    let path = view.path;
    if (!path) {
        return;
    }
    path = injectParamsInPath(path, params);
    window.ciga.history.push(path);
}

function injectParamsInPath(path, params) {
    if (params) {
        for (let [key, value] of Object.entries(params)) {
            path = path.replace(`:${key}`, value);
        }
    }
    return path;
}