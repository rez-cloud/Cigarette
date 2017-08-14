import css from '../styles/site.css';

import React from 'react';
import PropTypes from 'prop-types';

import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes'
import Nav from "./components/nav/nav";
import AddProject from "./containers/addProject";
import AddModule from "./containers/addModule";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Application extends React.Component {
    static proptTypes = {
        notifications: PropTypes.array.isRequired,
        handleCloseNotification: PropTypes.func.isRequired
    };

    renderNotifications() {
        this.props.notifications.forEach(notify => {
            if (notify.id === 0) {
                const not = notify;
                console.log(notify.id);
                not.id = toast(not.text, {
                    //onClose: () => this.props.handleCloseNotification(not),
                    autoClose: 3000
                });                
            }
        });
        return "";
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <MuiThemeProvider >
                    <div>
                        <Nav />
                        <AddProject />
                        <AddModule />
                        
                        <div className={css.content}>
                            {routes}
                        </div>

                        <ToastContainer
                            position="top-right"
                            type="default"
                            autoClose={3000}
                            hideProgressBar={true}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnHover >

                        </ToastContainer>
                        {this.renderNotifications()}
                        
                    </div>
                </MuiThemeProvider>
            </ConnectedRouter>
        );
    }
}


export default connect(
    dispatch => ({
        goToView: view => dispatch(goToView(view))
    })
)(Application);