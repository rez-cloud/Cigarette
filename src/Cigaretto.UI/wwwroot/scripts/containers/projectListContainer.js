import { connect } from 'react-redux'
import { clearNotification } from "../actions/notificationActions";
import ProjectList from "../components/projectList/projectList";

const mapStateToProps = state => {
    return {
        projects: state.projects,
        loading: state.isProjectsLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectProject: project => {
            dispatch(selectProject(project));
        }
    }
}

const ProjectListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList);

export default ProjectListContainer;