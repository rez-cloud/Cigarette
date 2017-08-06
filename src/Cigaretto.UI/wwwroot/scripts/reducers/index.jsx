import { combineReducers } from 'redux';

import ProjectReducer from './projectReducer';
import ViewReducer from './viewReducer';

const rootReducer = combineReducers({
    projects: ProjectReducer,
    currentView: ViewReducer
});

export default rootReducer