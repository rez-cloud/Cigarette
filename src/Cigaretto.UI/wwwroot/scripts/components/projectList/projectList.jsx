import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import LinearProgress from 'material-ui/LinearProgress';
import css from './projectList.css';

let SelectableList = makeSelectable(List);

class ProjectModalForm extends React.Component {
    static proptTypes = {
        projects: PropTypes.array.isRequired,
        loading: PropTypes.bool,
        selectProject: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {

            selectedIndex: -1
        };
    }

    handleOnChanged = (event, index) => {
        this.setState({
            selectedIndex: index
        });
        var selectedProject = this.props.projects.filter((value) => value.id === index)[0];
        this.props.selectProject(selectedProject);
    }

    componentWillReceiveProps() {

    }

    render() {

        return (
            <SelectableList
                value={this.state.selectedIndex}
                onChange={this.handleOnChanged}
            >
                <Subheader className={`grey lighten-4 ${css.list}`}>Available Projects</Subheader>
                {this.props.loading && <LinearProgress mode="indeterminate" color="#FF9800" />}
                {this.props.projects.map(p => {
                    const project = p;
                    return (
                        <ListItem key={project.id}
                            value={project.id}
                            primaryText={project.name}
                            leftAvatar={<Avatar icon={<FileFolder />} />}
                        >

                        </ListItem>

                    );
                })}
            </SelectableList>
        );
    }
}
export default (ProjectModalForm);