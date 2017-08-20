import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import Dialog from 'material-ui/Dialog';
//import FlatButton from 'material-ui/FlatButton';
//import TextField from 'material-ui/TextField';
//import LinearProgress from 'material-ui/LinearProgress';

class ProjectDetail extends React.Component {
    static proptTypes = {
        project: PropTypes.object.isRequired,
        components: PropTypes.array.isRequired        
    };

    constructor(props) {
        super(props);
        this.state = {
           
        };
        
    }     

    render() {
        if (!this.props.project.name) {
            return (<div>no project selected</div>); 
        }
        return (<div>{this.props.project.name}</div>);
    }
}



export default (ProjectDetail);