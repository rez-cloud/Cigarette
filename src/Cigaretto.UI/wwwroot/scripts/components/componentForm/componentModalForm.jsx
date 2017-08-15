import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

class ModuleModalForm extends React.Component {
    static proptTypes = {
        component: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        dataProcessing: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            component: { ...this.props.component }
        };

        this.handleOnChanged = this.handleOnChanged.bind(this);
    }

    handleOnChanged(event) {
        let module = { ...this.module };
        module.name = event.target.value;
        this.setState({ component });
    }

    componentWillReceiveProps() {
        this.setState({
            component: { ...this.props.component }
        });
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
                disabled={this.state.component.name.length < 2}
                onClick={() => this.props.handleSave(this.props.projectId, this.state.component)}
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
                title="Module"
                actions={this.getButtons()}

                modal={true}
                open={this.props.open}
                contentStyle={customContentStyle}
            >

                {this.props.dataProcessing && <LinearProgress mode="indeterminate" color="#FF9800" />}

                <TextField hintText="Module name"
                    disabled={this.props.dataProcessing}
                    value={this.state.component.name}
                    onChange={this.handleOnChanged}
                    fullWidth={true} />

            </Dialog>
        );
    }
}
export default (ModuleModalForm);