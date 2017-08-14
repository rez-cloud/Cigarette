import * as types from "../actionTypes";
import API from "../infrastructure/API";
import { addNotification } from "./notificationActions";

const api = new API();

export function requestCreateModule() {
    return { type: types.REQUEST_CREATE_MODULE }
}

export function cancelCreateModule() {
    return { type: types.CANCEL_CREATE_MODULE }
}

export function beginSaving() {
    return { type: types.BEGIN_SAVING_MODULE }
}

export function endSaving(module, error) {
    return { type: types.END_SAVING_MODULE, module: module, error: error }
}

export function beginLoadModules() {
    return { type: types.BEGIN_LOAD_MODULES }
}

export function endLoadModules(modules = [], error) {
    return { type: types.END_LOAD_MODULES, modules: modules, error: error }
}

//export function selectProject(module) {
//    return { type: types.SELECT_PROJECT, project: project }
//}

export function loadModules(projectId) {
    return dispatch => {
        dispatch(beginLoadModules());
        return api.loadModules(projectId)
            .done(data => {
                dispatch(endLoadModules(data));
            }).catch(error => dispatch(endLoadModules([], error)));
    }
}

export function saveModule(projectId, module) {
    return dispatch => {
        dispatch(beginSaving());
        return api.saveModule(projectId, module)
            .done(data => {
                dispatch(endSaving(data));
                dispatch(addNotification({
                    text: `Module ${data.name} has been created`
                }));
            })
            .catch(error => dispatch(endSaving(module, error)));
    }
}