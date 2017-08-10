import { connect } from 'react-redux'
import { saveProject, cancelCreateProject, loadProjects } from "../actions/projectActions";
import ProjectsView from "../views/projectsView";

const mapStateToProps = state => {
    return {
        projects: state.projects,
        error: state.error,
        loading: state.isProjectsLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const ProjectsViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsView);

export default ProjectsViewContainer;