import React from 'react';
import PropTypes from 'prop-types';

import { createProject } from "../actions/projectActions";

import ProjectListContainer from "../containers/projectListContainer";

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
            <div className="row ">
                <div className="col s3 blue lighten-5">
                    <ProjectListContainer projects={this.props.projects} /></div>
                <div className="col s9"></div>
            </div>
        );
    }
}

export default ProjectsView;