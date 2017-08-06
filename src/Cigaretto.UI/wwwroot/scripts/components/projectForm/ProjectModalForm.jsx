import React from "react";
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class ProjectModalForm extends React.Component {
    static proptTypes = {
        project: PropTypes.object.isRequired,
        handleClose: PropTypes.func.isRequired,
        saveProject: PropTypes.func.isRequired
    };

    constructor(props) {

        super(props);
        this.state = {
            project: props.project,
            open: true
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleOnChanged = this.handleOnChanged.bind(this);
    }

    handleClose() {
        this.setState({
            open: false
        });
        this.props.handleClose();
    }

    handleSave() {
        this.props.saveProject(this.state.project);
        this.handleClose();
    }

    handleOnChanged(event) {
        let project = { ...this.project };
        project.name = event.target.value;
        this.setState({ project });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.state.project.name.length < 2}
                onClick={this.handleSave} 
            />
        ];
        const customContentStyle = {
            width: '500px',
            maxWidth: '500px'
        };

        return (
            <Dialog
                title="Project"
                actions={actions}

                modal={true}
                open={this.state.open}
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
export default ProjectModalForm;