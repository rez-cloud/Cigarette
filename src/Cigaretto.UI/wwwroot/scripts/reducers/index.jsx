import { combineReducers } from 'redux';

import AddProjectReducer from "./addProjectReducer";
import ProjectReducer from './projectReducer';
import ViewReducer from './viewReducer';

const rootReducer = combineReducers({
    projects: ProjectReducer,
    currentView: ViewReducer,
    newProject: AddProjectReducer
});

export default rootReducer