import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import css from './moduleList.css';


class ModuleList extends React.Component {
    static proptTypes = {
        loading: PropTypes.bool,
        modules: PropTypes.array.isRequired,
        isProjectSelected: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.isProjectSelected && this.props.modules.length === 0) {
            return (<Paper className={css.paper} zDepth={2} >
                No Modules found.
                        <RaisedButton label="create module" primary={true} onClick={this.props.requestCreateModule} />
            </Paper>);
        }
        return (
            <div>{this.props.modules.map(module => {
                return module.name;
            })}
            </div>
        );
    }
}
export default (ModuleList);