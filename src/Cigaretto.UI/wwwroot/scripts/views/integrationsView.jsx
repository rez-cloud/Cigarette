import React from 'react';
import PropTypes from 'prop-types';

import IntegrationsContainer from "../containers/integration/integrationsContainer";
//import { createProject } from "../actions/projectActions";

//import ProjectListContainer from "../containers/projectListContainer";
//import ProjectDetailContainer from "../containers/projectDetailContainer";

//import css from './projectsView.css';

class IntegrationsView extends React.Component {
    static proptTypes = {
        //projects: PropTypes.array.isRequired,
        //currentProject: PropTypes.object,
        //error: PropTypes.object
    };

    constructor(props) {

        super(props);
        this.state = { 

        };
    }

    render() {
        return (
            <div className="row ">
                <div className={`col s3`}>
                    <IntegrationsContainer /></div>                
            </div>
        );
    }
}

export default IntegrationsView;