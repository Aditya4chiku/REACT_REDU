import React from 'react'


import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../layout/Layout'

const Dashboard = ({ user }) => {
    const { _id, name, email, role } = user
    const userLinks = () => {
        return (

            <div className="card">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to='/cart'>My cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to='/profile/update'>Update Profile</Link>
                    </li>
                </ul>

            </div>
        )
    }

    const userInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">
                    {role === 1 ? 'Admin' : 'Registered user'}
                </li>
            </ul>
        </div>
    )
    const purchaseHistory = () => (
        <div className="card mb-5">
            <h3 className="card-header">Purchase histroy</h3>
            <ul className="list-group">
                <li className="list-group-item">histroy</li>
            </ul>
        </div>
    )

    return (
        <Layout titile="Dashboard" description="User Dashboard">
            <div>
                <div className="row">
                    <div className="col-3">
                        {userLinks()}
                    </div>
                    <div className="col-9">
                        {userInfo()}
                        {purchaseHistory()}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    user: state.auth.user
})


export default connect(mapStateToProps)(Dashboard)