import { combineReducers } from 'redux';

import ViewReducer from './viewReducer';
import NotificationReducer from "./notificationReducer";

import AddProjectReducer from "./project/addProjectReducer";
import ProjectsReducer from './project/projectsReducer';
import ProjectsLoadingReducer from "./project/projectLoadingReducer";
import SelectProjectReducer from "./project/selectProjectReducer";

import AddComponentReducer from "./module/addComponentReducer";
import ComponentsLoadingReducer from "./module/componentLoadingReducer";
import ComponentsReducer from "./module/componentsReducer";

const rootReducer = combineReducers({
    currentView: ViewReducer,
    newProject: AddProjectReducer,
    notifications: NotificationReducer,

    projects: ProjectsReducer,
    isProjectsLoading: ProjectsLoadingReducer,
    currentProject: SelectProjectReducer,

    newComponent: AddComponentReducer,
    components: ComponentsReducer,
    isComponentsLoading: ComponentsLoadingReducer
});
export default rootReducer