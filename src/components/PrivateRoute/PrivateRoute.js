import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    return isAuthenticated() ? <Component {...props} /> : <Redirect to='/' />;
                }
            }
        />
    );

};

export default PrivateRoute;