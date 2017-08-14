import { combineReducers } from 'redux';

import ViewReducer from './viewReducer';
import NotificationReducer from "./notificationReducer";

import AddProjectReducer from "./project/addProjectReducer";
import ProjectsReducer from './project/projectsReducer';
import ProjectsLoadingReducer from "./project/projectLoadingReducer";
import SelectProjectReducer from "./project/selectProjectReducer";

import AddModuleReducer from "./module/addModuleReducer";
import ModulesLoadingReducer from "./module/moduleLoadingReducer";
import ModulesReducer from "./module/modulesReducer";

const rootReducer = combineReducers({
    currentView: ViewReducer,
    newProject: AddProjectReducer,
    notifications: NotificationReducer,

    projects: ProjectsReducer,
    isProjectsLoading: ProjectsLoadingReducer,
    currentProject: SelectProjectReducer,

    newModule: AddModuleReducer,
    modules: ModulesReducer,
    isModulesLoading: ModulesLoadingReducer
});
export default rootReducer