import * as types from "../../actionTypes";

export default function componentsLoadingReducer(state = false, action) {
    switch (action.type) {
    case types.BEGIN_LOAD_COMPONENTS:
        return true;
    case types.END_LOAD_COMPONENTS:
        return false;
    
    default:
        return state;
    }
}