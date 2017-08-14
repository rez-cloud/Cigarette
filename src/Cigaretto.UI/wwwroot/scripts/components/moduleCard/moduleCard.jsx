import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

class ModuleCard extends React.Component {
    static proptTypes = {
        module: PropTypes.object.isRequired,
        //open: PropTypes.bool.isRequired,
        //dataProcessing: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            module: { ...this.props.module }
        };


    }

    render() {

        return (
            <div className="card">
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.module.name}<i className="material-icons right">more_vert</i></span>

                </div>
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#test4">Test 1</a></li>
                        <li className="tab"><a className="active" href="#test5">Test 2</a></li>
                        <li className="tab"><a href="#test6">Test 3</a></li>
                    </ul>
                </div>
                <div className="card-content grey lighten-4">
                    <div id="test4">Test 1</div>
                    <div id="test5">Test 2</div>
                    <div id="test6">Test 3</div>
                </div>
            </div>
        );
    }
}
export default (ModuleCard);