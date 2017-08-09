export default class Utils {
    constructor(applicationErrorHandler) {
        this.applicationErrorHandler = applicationErrorHandler;
        this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            c => {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }
}