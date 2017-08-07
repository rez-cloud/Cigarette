import { LOAD_PROJECTS_SUCCESS, CREATE_PROJECT, REQUEST_CREATE_PROJECT, CANCEL_CREATE_PROJECT } from "../actionTypes";

export function requestCreateProject() {
    return { type: REQUEST_CREATE_PROJECT }
}

export function cancelCreateProject() {
    return { type: CANCEL_CREATE_PROJECT }
}

export function createProject(project) {
    return { type: CREATE_PROJECT, project }
}

export function loadProjectSuccess(projects) {
    return { type: LOAD_PROJECTS_SUCCESS, projects }
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