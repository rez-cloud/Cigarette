import { connect } from 'react-redux'
import { saveModule, cancelCreateModule } from "../actions/moduleActions";
import ModuleCard from "../../components/moduleCard/moduleCard";

const mapStateToProps = state => {
    return {        
        module: { name: "" },
        projectId: state.currentProject.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //handleSave: (projectId, module) => {
        //    dispatch(saveModule(projectId, module));
        //},
        //handleClose: () => dispatch(cancelCreateModule())
    }
}

const ModuleCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleCard);

export default ModuleCardContainer;