import * as types from "../actionTypes";

export default function projectReducer(state = { isRequested: false, isProcessed: false }, action) {
    switch (action.type) {
        case types.REQUEST_CREATE_PROJECT:
            return Object.assign({}, state,
                {
                    isRequested: true
                });
        case types.CANCEL_CREATE_PROJECT:
            return {
                isRequested: false,
                isProcessed: false
            };
        case types.CREATE_PROJECT:
            return false;
        default:
            return state;
    }
}