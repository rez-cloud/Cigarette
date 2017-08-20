import { connect } from 'react-redux'
//import { selectProject } from "../actions/projectActions";
import ProjectDetail from "../components/project/projectDetail";

const mapStateToProps = state => {
    return {
        project: state.currentProject,
        loading: state.isProjectsLoading,
        componens: state.components
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //selectProject: project => {
        //    dispatch(selectProject(project));
        //}
    }
}

const ProjectDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetail);

export default ProjectDetailContainer;