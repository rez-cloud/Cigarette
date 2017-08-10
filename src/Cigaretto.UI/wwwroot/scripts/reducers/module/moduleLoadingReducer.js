import * as types from "../../actionTypes";

export default function modulesLoadingReducer(state = false, action) {
    switch (action.type) {
    case types.BEGIN_LOAD_MODULES:
        return true;
    case types.END_LOAD_MODULES:
        return false;
    
    default:
        return state;
    }
}