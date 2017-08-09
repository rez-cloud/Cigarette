import * as types from "../actionTypes";
import API from "../infrastructure/API";
import { addNotification } from "./notificationActions";

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

export function loadProjectSuccess(projects) {
    return { type: types.LOAD_PROJECTS_SUCCESS, projects }
}

export function loadProjects() {
    const projects = [
        {
            id: "Marketplace",
            name: "Marketplace"
        },
        {
            id: "KPI",
            name: "KPI Dashboard"
        }
    ];
    return loadProjectSuccess(projects);
}