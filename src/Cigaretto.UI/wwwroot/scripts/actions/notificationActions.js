import { SHOW_NOTIFICATION, CLEAR_NOTIFICATION } from "../actionTypes";
import { toast } from 'react-toastify';

export function addNotification(notify) {
    //toast(notify.text)
    notify.id = 0;
    return { type: SHOW_NOTIFICATION, notification: notify }
}

export function clearNotification(notify) {
    return { type: CLEAR_NOTIFICATION, notification: notify }
}
