import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from './type';
import { setAlert } from './alert'

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
  }).catch(err => {
    const errors = err.response.data.error
    dispatch(setAlert(`${errors}`))
    dispatch({ type: LOGIN_FAILURE })
  })


}


