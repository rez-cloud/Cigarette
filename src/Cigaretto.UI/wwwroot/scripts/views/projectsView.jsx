import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectModalForm from "../components/projectForm/ProjectModalForm";
import { createProject } from "../actions/projectActions";

class ProjectsView extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            projects: props.projects || [],
            isAddingProject: false
        };

        //this.handleNewProjectClicked = this.handleNewProjectClicked.bind(this);
        //this.handleClose = this.handleClose.bind(this);
        //this.handleSaveProject = this.handleSaveProject.bind(this);
    }

    handleNewProjectClicked() {
        this.setState({
            isAddingProject: true
        });
    }

    handleClose() {
        this.setState({
            isAddingProject: false
        });
    }

    handleSaveProject(project) {
        this.props.createProject(project);
    }

    render() {        
        return (
            <div className="row">
                there is should be list of projects:
                {this.props.projects.map(project => {
                    return project.name;
                })}
                {this.state.isAddingProject &&
                    <ProjectModalForm
                        project={{ name: "" }}
                        handleClose={this.handleClose}
                        saveProject={this.handleSaveProject}/>}
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        projects: state.projects
    });


const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsView);