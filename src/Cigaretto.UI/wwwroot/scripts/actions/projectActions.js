import * as types from "../actionTypes";
import API from "../infrastructure/API";
import { addNotification } from "./notificationActions";

import { loadComponents } from "./componentActions";

const api = new API();

export function requestCreateProject() {
    return { type: types.REQUEST_CREATE_PROJECT }
}

export function cancelCreateProject() {
    return { type: types.CANCEL_CREATE_PROJECT }
}

export function beginSaving() {
    return { type: types.BEGIN_SAVING_PROJECT }
}

export function endSaving(project, error) {
    return { type: types.END_SAVING_PROJECT, project: project, error: error }
}

export function beginLoadProjects() {
    return { type: types.BEGIN_LOAD_PROJECTS }
}

export function endLoadProjects(projects=[], error) {
    return { type: types.END_LOAD_PROJECTS, projects: projects, error: error }
}

export function selectProject(project) {
    return dispatch => {
        dispatch(selectProjectCore(project));
        dispatch(loadComponents(project.id));
    }
}

export function selectProjectCore(project) {
    return { type: types.SELECT_PROJECT, project: project }
}

export function loadProjects() {
    return dispatch => {
        dispatch(beginLoadProjects());
        return api.loadProjects()
            .done(data => {
                dispatch(endLoadProjects(data));
            }).catch(error => dispatch(endLoadProjects([], error)));
    }
}

export function saveProject(project) {
    return dispatch => {
        dispatch(beginSaving());
        return api.saveProject(project)
            .done(data => {
                dispatch(endSaving(data));
                dispatch(addNotification({
                    text: `Project ${data.name} has been created`
                }));
            })
            .catch(error => dispatch(endSaving(project, error)));
    }
}