import * as types from "../actionTypes";

export default function projectsLoadinReducer(state = false, action) {
    switch (action.type) {
    case types.BEGIN_LOAD_PROJECTS:
        return true;
    case types.END_LOAD_PROJECTS:
        return false;
    
    default:
        return state;
    }
}