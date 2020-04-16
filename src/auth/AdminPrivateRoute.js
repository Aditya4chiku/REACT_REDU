import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spiner';

const PrivateRoute = ({
    component: Component,
    auth: { isAuthenticated, loading, user },
    ...rest
}) => (

        <Route
            {...rest}
            render={props => isAuthenticated && user.role === 1 ? (
                <Component
                    {...props}
                />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: props.location }
                        }}
                    />
                )}
        />
    );

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
