import React from 'react';

const projectApi = 'api/project';

class API {
    saveProject(project) {
        return this._post(projectApi, project);
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
}

export default API;