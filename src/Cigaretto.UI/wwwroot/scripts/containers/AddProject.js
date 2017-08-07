import { connect } from 'react-redux'
import { createProject, cancelCreateProject } from "../actions/projectActions";
import ProjectForm from "../components/projectForm/ProjectModalForm";

const mapStateToProps = state => {
    return {
        open: state.newProjectRequested,
        project: { name: "" }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: project => {
            dispatch(createProject(project));
        },
        handleClose: () => dispatch(cancelCreateProject())
    }
}

const AddProject = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectForm);

export default AddProject;