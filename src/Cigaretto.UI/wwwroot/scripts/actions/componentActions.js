import * as types from "../actionTypes";
import API from "../infrastructure/API";
import { addNotification } from "./notificationActions";

const api = new API();

export function requestCreateComponent() {
    return { type: types.REQUEST_CREATE_COMPONENT }
}

export function cancelCreateComponent() {
    return { type: types.CANCEL_CREATE_COMPONENT }
}

export function beginSaving() {
    return { type: types.BEGIN_SAVING_COMPONENT }
}

export function endSaving(module, error) {
    return { type: types.END_SAVING_COMPONENT, module: module, error: error }
}

export function beginLoadComponents() {
    return { type: types.BEGIN_LOAD_COMPONENTS }
}

export function endLoadComponents(components = [], error) {
    return { type: types.END_LOAD_COMPONENTS, components: components, error: error }
}

//export function selectProject(module) {
//    return { type: types.SELECT_PROJECT, project: project }
//}

export function loadComponents(projectId) {
    return dispatch => {
        dispatch(beginLoadComponents());
        return api.loadComponents(projectId)
            .done(data => {
                dispatch(endLoadComponents(data));
            }).catch(error => dispatch(endLoadComponents([], error)));
    }
}

export function saveComponent(projectId, component) {
    return dispatch => {
        dispatch(beginSaving());
        return api.saveComponent(projectId, component)
            .done(data => {
                dispatch(endSaving(data));
                dispatch(addNotification({
                    text: `Component ${data.name} has been created`
                }));
            })
            .catch(error => dispatch(endSaving(component, error)));
    }
}