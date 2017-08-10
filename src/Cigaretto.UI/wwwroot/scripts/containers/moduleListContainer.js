import { connect } from 'react-redux'
import { selectProject } from "../actions/projectActions";
import ModuleList from "../components/moduleList/moduleList";

const mapStateToProps = state => {
    return {
        modules: state.modules,
        loading: state.isModulesLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectModule: module => {
            //dispatch(selectProject(project));
        }
    }
}

const ModuleListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleList);

export default ModuleListContainer;