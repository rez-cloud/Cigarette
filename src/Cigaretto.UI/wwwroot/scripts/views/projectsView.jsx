import React from 'react';
import PropTypes from 'prop-types';

import { createProject } from "../actions/projectActions";

import ProjectListContainer from "../containers/projectListContainer";
import ComponentListContainer from "../containers/componentListContainer";

import css from './projectsView.css';

class ProjectsView extends React.Component {
    static proptTypes = {
        projects: PropTypes.array.isRequired,
        currentProject: PropTypes.object,
        error: PropTypes.object
    };

    constructor(props) {

        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="row ">
                <div className={`col s3 ${css.projectList}`}>
                    <ProjectListContainer /></div>
                <div className="col s9">
                    <ComponentListContainer /></div>
            </div>
        );
    }
}

export default ProjectsView;