import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_LOADED } from './type';
import { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken';

export const signup = ({ name, email, password }) => async dispatch => {

    console.log(name)
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ name, email, password });

    axios.post('http://localhost:8000/api/signup', body, config).then(response => {
        return response
    }).then(response => {
        console.log(response.data)
        dispatch({ type: REGISTER_SUCCESS, payload: response.data })
        dispatch(setAlert("User Register Sucess", 'success'))
    }).catch(err => {
        console.log(err.response.data.error)
        dispatch({ type: REGISTER_FAILURE })
        dispatch(setAlert(`${err.response.data.error}`, 'danger'))
    })
}


export const signin = ({ email, password }) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    axios.post('http://localhost:8000/api/signin', body, config).then(respose => {
        console.log(respose)
        dispatch(setAlert('Login Success', 'success'))
        dispatch({ type: LOGIN_SUCCESS, payload: respose.data })
        dispatch(loadUser(respose.data))
    }).catch(err => {
        const errors = err.response.data.error
        dispatch(setAlert(`${errors}`))
        dispatch({ type: LOGIN_FAILURE })
    })
}

export const signout = () => dispatch => {
    dispatch({ type: LOGOUT })
    axios.get('http://localhost:8000/api/signin')
        .then(response => {
            dispatch({ type: LOGOUT })
            dispatch(setAlert('Signout Sucessfulluy', 'success'))
        })
}


export const loadUser = (data) => async dispatch => {
    const { user } = data
    console.log("USER", user._id)

    if (localStorage.getItem("jwt")) {
        setAuthToken(localStorage.getItem("jwt"))
    }
    dispatch({ type: USER_LOADED, payload: data.data })
    // try {
    //     const res = await axios.get(`http://localhost:8000/api/secret/${user._id}`)
    //     console.log("Response", res.data)


    // } catch (err) {

    // }

}

