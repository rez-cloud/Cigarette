
import css from '../styles/site.css';

import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes'
import Nav from "./components/nav/nav";
import AddProject from "./containers/AddProject";

//import Nav from './components/nav/nav';

class Application extends React.Component {
    componentWillReceiveProps(g) {
        var z = g;
    }

    isNewProjectRequested() {
        return !!this.props.state.projects.newProject;
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <MuiThemeProvider >
                    <div>
                        <Nav />
                        <AddProject />
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