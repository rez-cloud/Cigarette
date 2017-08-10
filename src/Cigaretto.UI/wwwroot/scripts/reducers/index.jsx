import { combineReducers } from 'redux';

import AddProjectReducer from "./addProjectReducer";
import ProjectReducer from './projectReducer';
import ViewReducer from './viewReducer';
import NotificationReducer from "./notificationReducer";
import ProjectsLoadingReducer from "./projectLoadingReducer";

const rootReducer = combineReducers({
    projects: ProjectReducer,
    currentView: ViewReducer,
    newProject: AddProjectReducer,
    notifications: NotificationReducer,
    isProjectsLoading: ProjectsLoadingReducer
});

export default rootReducer