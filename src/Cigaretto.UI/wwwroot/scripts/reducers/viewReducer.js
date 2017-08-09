import * as types from "../actionTypes";

const initialState = {
    name: null,
    params: null
};

export default function ViewReducer(state = initialState, action) {
    switch (action.type) {
        case types.END_SAVING_PROJECT:
            { return { ...state } }
        default:
            return state;
    }
} 