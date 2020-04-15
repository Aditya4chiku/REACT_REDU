import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from '../redux/actions/auth'
import PropTypes from 'prop-types';


const Signin = ({ signin, isAuthenticated, loading }) => {
    const [values, setValues] = useState({
        email: "adi@gmail.com",
        password: "adi@123"
    });

    const { email, password } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values });
        signin({ email, password })
    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                {loading ? (<div className="spinner-border text-primary" >
                    <span className="sr-only">Loading...</span>
                </div>) : "Signin"}
            </button>
        </form>
    );

    return (
        <div>
            {signUpForm()}
        </div>
    );
};

Signin.propTypes = {
    isAuthenticated: PropTypes.bool,
    signin: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
    alert: state.alert
})
export default connect(mapStateToProps, { signin })(Signin);
