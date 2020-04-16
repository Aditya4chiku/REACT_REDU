import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../redux/actions/auth";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};


const Menu = ({ history, signout, isAuthenticated, user }) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/")}
                        to="/"
                    >
                        Home
                </Link>
                </li>
                {isAuthenticated && user.role === 0 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/")}
                            to="/user/dashboard"
                        >User Dashboard
                    </Link>
                    </li>
                )
                }

                {
                    isAuthenticated && user.role === 1 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/")}
                                to="/admin/dashboard"
                            >
                                Admin Dashboard
              </Link>
                        </li>
                    )
                }

                {
                    !isAuthenticated && (
                        <Fragment>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signin")}
                                    to="/signin"
                                >
                                    Signin
                         </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signup")}
                                    to="/signup"
                                >
                                    Signup
                </Link>
                            </li>
                        </Fragment>
                    )}
                {
                    isAuthenticated && (
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                style={{ cursor: 'pointer', color: '#ffffff' }}
                                onClick={() => signout(() => {
                                    history.push('/')
                                })}
                            >
                                Signout
                    </span>
                        </li>
                    )
                }

            </ul>
        </div>)
}

Menu.propTypes = {
    signout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})


export default connect(mapStateToProps, { signout })(withRouter(Menu));
