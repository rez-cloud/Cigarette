import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
//import ModuleCard from "../moduleCard/moduleCard";

import css from './componentList.css';


class ComponentList extends React.Component {
    static proptTypes = {
        loading: PropTypes.bool,
        components: PropTypes.array.isRequired,
        isProjectSelected: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.isProjectSelected && this.props.components.length === 0) {
            return (<Paper className={css.paper} zDepth={2} >
                No Components found.
                       
            </Paper>);
        }
        return (
            <div>{this.props.components.map(component => {
                return component.name;
            })}
            </div>
        );
    }
}
export default (ComponentList);