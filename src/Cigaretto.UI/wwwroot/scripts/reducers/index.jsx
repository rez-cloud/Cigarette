import { combineReducers } from 'redux';

import AddProjectReducer from "./addProjectReducer";
import ProjectReducer from './projectReducer';
import ViewReducer from './viewReducer';

const rootReducer = combineReducers({
    projects: ProjectReducer,
    currentView: ViewReducer,
    newProjectRequested: AddProjectReducer
});

export default rootReducer