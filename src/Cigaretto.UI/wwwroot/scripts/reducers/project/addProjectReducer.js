import * as types from "../../actionTypes";

export default function projectReducer(state = { isRequested: false, isProcessed: false, error: null }, action) {
    switch (action.type) {
        case types.REQUEST_CREATE_PROJECT:
            return Object.assign({}, state, {
                isRequested: true
            });
        case types.BEGIN_SAVING_PROJECT:
            { return { ...state, isProcessed: true } }
        case types.END_SAVING_PROJECT:
            { return { ...state, isProcessed: false, isRequested: false, error: action.error } }
        case types.CANCEL_CREATE_PROJECT:
            return { 
                isRequested: false,
                isProcessed: false
            };        
        default:
            return state;
    }
}