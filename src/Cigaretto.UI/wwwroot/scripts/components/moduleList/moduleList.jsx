import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Paper from 'material-ui/Paper';

import css from './moduleList.css';


class ModuleList extends React.Component {
    static proptTypes = {
        loading: PropTypes.bool,
        modules: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.modules.length === 0) {
            return (<Paper className={css.paper} zDepth={2} />);
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