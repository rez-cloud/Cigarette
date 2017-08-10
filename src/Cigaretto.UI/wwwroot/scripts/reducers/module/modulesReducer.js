import * as types from "../../actionTypes";

export default function modulesReducer(state = [], action) {
    switch (action.type) {
        case types.END_LOAD_MODULES:
            return action.modules;
        case types.CREATE_MODULE:
            {
                return [
                    ...state,
                    action.module
                ];
            }
        case types.END_SAVING_MODULE:
            if (action.error) {
                return state;
            }
            return [...state, action.module];
        default:
            return state;
    }
}