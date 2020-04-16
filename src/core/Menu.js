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


const Menu = ({ history, signout, isAuthenticated }) => (
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
            {console.log("I am Authent", isAuthenticated)}
            {
                isAuthenticated && (<li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        User DashBoard
                </Link>
                </li>)
            }
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/signup")}
                    to="/signup"
                >
                    Signup
                </Link>
            </li>
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

        </ul>
    </div>
);

Menu.propTypes = {
    signout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStaeToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})


export default connect(mapStaeToProps, { signout })(withRouter(Menu));
