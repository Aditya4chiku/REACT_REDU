import React from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../layout/Layout'
const AdminDashboard = ({ user }) => {
    const { _id, name, email, role } = user
    const adminLinks = () => {

        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to='/create/category'>
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to='/create/product'>
                            Create Product
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }


    const adminInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{user.name}</li>
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">
                    {role === 1 ? 'Admin' : 'Registered user'}
                </li>
            </ul>
        </div>
    )

    return (
        <Layout titile="Dashboard" description="Admin Dashboard">
            <div>
                <div className="row">
                    <div className="col-3">
                        {adminLinks()}
                    </div>
                    <div className="col-9">
                        {adminInfo()}

                    </div>
                </div>
            </div>
        </Layout>
    )
}
AdminDashboard.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToprops = state => ({
    user: state.auth.user
})

export default connect(mapStateToprops)(AdminDashboard)