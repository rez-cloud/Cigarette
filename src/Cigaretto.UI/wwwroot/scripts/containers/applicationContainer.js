import { connect } from 'react-redux'
import { clearNotification } from "../actions/notificationActions";
import Application from "../application";

const mapStateToProps = state => {
    return {
        notifications: state.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCloseNotification: notification => {
            dispatch(clearNotification(notification));
        }
    }
}

const ApplicationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Application);

export default ApplicationContainer;