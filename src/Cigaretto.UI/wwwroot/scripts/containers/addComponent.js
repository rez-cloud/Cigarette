import { connect } from 'react-redux'
import { saveComponent, cancelCreateComponent } from "../actions/componentActions";
import ComponentForm from "../components/componentForm/componentModalForm";

const mapStateToProps = state => {
    return {
        open: state.newComponent.isRequested,
        dataProcessing: state.newComponent.isProcessed,
        component: { name: "" },
        projectId: state.currentProject.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (projectId, component) => {
            dispatch(saveComponent(projectId, component));
        },
        handleClose: () => dispatch(cancelCreateComponent())
    }
}

const AddComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentForm);

export default AddComponent;