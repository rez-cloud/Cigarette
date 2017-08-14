import { connect } from 'react-redux'
import { saveModule, cancelCreateModule } from "../actions/moduleActions";
import ModuleForm from "../components/moduleForm/moduleModalForm";

const mapStateToProps = state => {
    return {
        open: state.newModule.isRequested,
        dataProcessing: state.newModule.isProcessed,
        module: { name: "" },
        projectId: state.currentProject.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (projectId, module) => {
            dispatch(saveModule(projectId, module));
        },
        handleClose: () => dispatch(cancelCreateModule())
    }
}

const AddModule = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleForm);

export default AddModule;