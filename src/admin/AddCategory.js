import React from 'react'
import { createCategory } from './apiAdmin'
import { connect } from 'react-redux';
import { setAlert } from '../redux/actions/alert'
import Layout from '../layout/Layout';
import PropTypes from 'prop-types'

const AddCategory = ({ user, setAlert, token }) => {
    const [name, setName] = React.useState(" ");

    const handleChange = e => {
        setName(e.target.value)
    }

    const clickSubmit = async (e) => {
        e.preventDefault()

        createCategory(user._id, token, { name })
    }

    const newCategory = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                    className=" form-control"
                />
            </div>
            <div>
                <button className="btn btn-outline-primary">Create Category</button>
            </div>
        </form>
    )
    return (
        <Layout
            title="Add a new category"
            description={`G'day ${user.name}, ready to add a new category?`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {newCategory()}
                </div>
            </div>
        </Layout>
    )


}

AddCategory.propTypes = {
    user: PropTypes.object.isRequired,
    token: PropTypes.string
}

const mapStateToProps = state => ({
    user: state.auth.user,
    token: state.auth
})
export default connect(mapStateToProps, { setAlert })(AddCategory)