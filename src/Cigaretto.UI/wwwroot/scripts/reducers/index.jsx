import { combineReducers } from 'redux';

import ProjectsReducer from './projectsReducer';

const rootReducer = combineReducers({
    projectsView: ProjectsReducer   
});

export default rootReducer