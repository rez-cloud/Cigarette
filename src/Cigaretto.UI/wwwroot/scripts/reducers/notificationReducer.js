import { SHOW_NOTIFICATION, CLEAR_NOTIFICATION } from "../actionTypes";

export default function notificationReducer(state = [], action) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return [
                ...state,
                action.notification
            ];
        case CLEAR_NOTIFICATION: {
            var nots = state.filter((notify) => { return notify.id !== action.notification.id });
            return [...nots];
        }
        default:
            return state;
    }
}