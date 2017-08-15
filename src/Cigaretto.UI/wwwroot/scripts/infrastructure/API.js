import React from 'react';

const projectApi = 'api/project';
const componentApi = 'api/project/{projectId}/component';

class API {
    loadProjects() {
        return this._get(projectApi);
    }

    saveProject(project) {
        return this._post(projectApi, project);
    }

    loadComponents(projectId) {
        const url = componentApi.replace('{projectId}', projectId);
        return this._get(url);
    }

    saveComponent(projectId, component) {
        const url = componentApi.replace('{projectId}', projectId);
        return this._post(url, component);
    }

    _post(url, data) {
        return $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            //success: success,
            //dataType: "application/json",
            contentType: 'application/json'
        });
    }

    _get(url) {
        return $.get({            
            url: url,
            //success: success,
            //dataType: "application/json"
        });
    }
}

export default API;