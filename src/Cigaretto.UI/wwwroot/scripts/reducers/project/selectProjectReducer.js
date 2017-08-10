import * as types from "../../actionTypes";

export default function selectProjectReducer(state = {}, action) {
    switch (action.type) {
        case types.SELECT_PROJECT:
            return action.project;
        default:
            return state;
    }
} 