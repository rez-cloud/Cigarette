import { connect } from 'react-redux'
import { requestCreateModule } from "../actions/moduleActions";
import ModuleList from "../components/moduleList/moduleList";

const mapStateToProps = state => {
    return {
        modules: state.modules,
        loading: state.isModulesLoading,
        isProjectSelected: !!state.currentProject.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestCreateModule: module => {
            dispatch(requestCreateModule(module));
        }
    }
}

const ModuleListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleList);

export default ModuleListContainer;