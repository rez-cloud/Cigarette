import * as types from "../actionTypes";

export default function projectReducer(state = false, action) {
    switch (action.type) {
        case types.REQUEST_CREATE_PROJECT:
            return true;
        case types.CANCEL_CREATE_PROJECT:
            return false;
        case types.CREATE_PROJECT:
            return false;
        default:
            return state;
    }
}