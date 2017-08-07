import React from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import css from "./nav.css";
import { requestCreateProject } from "../../actions/projectActions";

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3
        };        
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <div className={css['logo-container']}>
                        <label className={css['logo-caption']}>
                            <span className={css.first}>Ciga</span>
                            <span className={css.second}>retto</span></label>
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <RaisedButton label="create project" primary={true} onClick={this.props.requestCreateProject} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }>
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

const mapStateToProps = state => ({});


const mapDispatchToProps = dispatch => ({
    requestCreateProject: () => dispatch(requestCreateProject())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);