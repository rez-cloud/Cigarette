import { connect } from 'react-redux'
//import { saveProject, cancelCreateProject, loadProjects } from "../actions/projectActions";
import IntegrationsView from "../views/integrationsView";

const mapStateToProps = state => {
    return {
      //  integrations: state.integraions
        //currentProject: state.currentProject,
        //error: state.error,
        //loading: state.isProjectsLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const IntegrationsViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IntegrationsView);

export default IntegrationsViewContainer;