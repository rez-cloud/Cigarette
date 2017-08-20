import { connect } from 'react-redux'
//import { saveComponent, cancelCreateComponent } from "../actions/componentActions";
import IntegrationsForm from "../../components/integration/integrations";

const mapStateToProps = state => {
    return {
        //open: state.integrations.open,
        //integrations: state.integraions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //handleSave: (projectId, component) => {
        //    dispatch(saveComponent(projectId, component));
        //},
        //handleClose: () => dispatch(cancelCreateComponent())
    }
} 

const IntegrationsComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(IntegrationsForm);

export default IntegrationsComponent;