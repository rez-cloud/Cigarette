import React from 'react';
import { Route, Switch } from 'react-router';

import ProjectsViewContainer from "./containers/projectsViewContainer";

const _routes = [
    {
        name: "projects",
        path: '/',
        component: ProjectsViewContainer
    }
];

export default (
    <Switch>
        {
            _routes.map(route => (
                <Route key={route.name} exact path={route.path}
                    render={
                        props => {
                            return React.createElement(route.component, {
                                name: route.name,
                                ...props,
                                ...props.match.params,
                                ...route.props
                            });
                        }}
                />))
        }
    </Switch>
);

const routesMap = {};
_routes.forEach(route => {
    routesMap[route.name] = route;
});
export const views = routesMap;