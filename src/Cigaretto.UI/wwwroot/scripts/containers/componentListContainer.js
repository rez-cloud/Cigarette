import { connect } from 'react-redux'
import { requestCreateComponent } from "../actions/componentActions";
import ComponentList from "../components/componentList/componentList";

const mapStateToProps = state => {
    return {
        components: state.components,
        loading: state.isComponentsLoading,
        isProjectSelected: !!state.currentProject.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestCreateModule: module => {
            dispatch(requestCreateComponent(module));
        }
    }
}

const ComponentListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentList);

export default ComponentListContainer;