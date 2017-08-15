import * as types from "../../actionTypes";

export default function componentsReducer(state = [], action) {
    switch (action.type) {
        case types.END_LOAD_COMPONENTS:
            return action.components;
        case types.CREATE_COMPONENT:
            {
                return [
                    ...state,
                    action.component
                ];
            }
        case types.END_SAVING_COMPONENT:
            if (action.error) {
                return state;
            }
            return [...state, action.component];
        default:
            return state;
    }
}