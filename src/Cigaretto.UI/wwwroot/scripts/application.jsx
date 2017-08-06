
import css from '../styles/site.css';

import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import PropTypes from 'prop-types';

//import Nav from './components/nav/nav';
 
class Application extends React.Component {
    // Needed for invalidate view on iPhonish devices after back swipe. 
    // For some reason react calls render but components are not redrawn
    invalidateView() {
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <div> 
                    
                    <div className={css.content}>
                        {routes}
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}

export default connect(
    dispatch => ({
        goToView: view => dispatch(goToView(view))
    })
)(Application);