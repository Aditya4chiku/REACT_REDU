import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const PrivateRoute = ({ component: Component,

    auth: { isAuthenticated },
    ...rest }) => {
    let isAuthenticated = localStorage.getItem('auth')

    return (<Route
        {...rest}
        render={props => isAuthenticated ? (
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
    />)
}


PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    auth: state.auth
}

export default connect(mapStateToProps)(PrivateRoute)