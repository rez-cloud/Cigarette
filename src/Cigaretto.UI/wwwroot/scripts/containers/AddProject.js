import { connect } from 'react-redux'
import { saveProject, cancelCreateProject } from "../actions/projectActions";
import ProjectForm from "../components/projectForm/ProjectModalForm";

const mapStateToProps = state => {
    return {
        open: state.newProject.isRequested,
        dataProcessing: state.newProject.isProcessed,
        project: { name: "" }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: project => {
            dispatch(saveProject(project));
        },
        handleClose: () => dispatch(cancelCreateProject())
    }
}

const AddProject = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectForm);

export default AddProject;