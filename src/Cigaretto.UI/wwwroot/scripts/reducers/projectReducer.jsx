import * as types from "../actionTypes";

export default function projectReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PROJECTS_SUCCESS:
            return action.projects;        
        case types.CREATE_PROJECT:
            {
                return [
                    ...state,
                    action.project
                ];
            }
        case types.PROJECT_CREATED:
            var newObj = {
                ...state,
                newProject: undefined
            };
            return newObj; 
        default:
            return state;
    }
}