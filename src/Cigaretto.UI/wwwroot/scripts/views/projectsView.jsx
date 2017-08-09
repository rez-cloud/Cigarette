import React from 'react';
import PropTypes from 'prop-types';

import { createProject } from "../actions/projectActions";

class ProjectsView extends React.Component {
    static proptTypes = {
        projects: PropTypes.array.isRequired,
        error: PropTypes.object
    };

    constructor(props) {

        super(props);
        this.state = {
            //projects: props.projects
        };

        //this.handleNewProjectClicked = this.handleNewProjectClicked.bind(this);
        //this.handleClose = this.handleClose.bind(this);
        //this.handleSaveProject = this.handleSaveProject.bind(this);
    }

    render() {
        return (
            <div className="row">
                there is should be list of projects:
                {this.props.projects.map(project => {
                    return project.name;
                })}
            </div>
        );
    }
}

export default ProjectsView;