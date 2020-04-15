import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alert";
import PropTypes from 'prop-types'
import { signup } from '../redux/actions/auth'

const Signup = ({ setAlert, signup, loading }) => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, email, password, error, success } = values;
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
        console.log(values)

    };




    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })

        signup({ name, email, password })

    };


    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

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
                </div>) : "Signup"}
            </button>
        </form>
    );


    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        );
    }

    const showSuccess = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
                New Account is Created .Please signin <Link to='/signin'>Signin</Link>
            </div>
        )
    }



    return (
        <div className="row">
            <div className="col-sm-3 col-md-6 col-lg-2">

            </div>
            <div className="col-sm-9 col-md-6 col-lg-10">
                {signUpForm()}
                {console.log("I am ", loading)}
            </div>


        </div >
    );
};



Signup.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool
}

const mapStaeToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
})



export default connect(mapStaeToProps, { setAlert, signup })(Signup);
