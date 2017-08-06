
import css from '../styles/site.css';

import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes'
import PropTypes from 'prop-types';

//import Nav from './components/nav/nav';

class Application extends React.Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <MuiThemeProvider >
                    <div>

                        <div className={css.content}>
                            {routes}
                        </div>
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