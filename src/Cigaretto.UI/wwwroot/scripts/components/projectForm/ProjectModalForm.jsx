import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class ProjectModalForm extends React.Component {
    static proptTypes = {
        project: PropTypes.object.isRequired,
        //handleClose: PropTypes.func.isRequired,
        //saveProject: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            project: this.props.project
        };

        this.handleOnChanged = this.handleOnChanged.bind(this);
    }

    handleOnChanged(event) {
        let project = { ...this.project };
        project.name = event.target.value;
        this.setState({ project });
    }

    getButtons() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.state.project.name.length < 2}
                onClick={() => this.props.handleSave(this.state.project)}
            />
        ];
        return actions;
    }

    render() {

        const customContentStyle = {
            width: '500px',
            maxWidth: '500px'
        };
        return (
            <Dialog
                title="Project"
                actions={this.getButtons()}
                modal={true}
                open={this.props.open}
                contentStyle={customContentStyle}
            >
                <TextField hintText="Project name"
                    value={this.state.project.name}
                    onChange={this.handleOnChanged}
                    fullWidth={true} />

            </Dialog>
        );
    }
}
export default (ProjectModalForm);