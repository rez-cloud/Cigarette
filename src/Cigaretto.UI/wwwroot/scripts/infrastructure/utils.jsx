export default class Utils {
    constructor(applicationErrorHandler) {
        this.applicationErrorHandler = applicationErrorHandler;
        this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
}