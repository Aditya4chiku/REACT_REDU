import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './type';
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


  // try {
  //   const result = await axios.post('http://localhost:8000/api/signup', body, config);
  //   console.log("Response from backend", result.data)
  //   dispatcch({ type: REGISTER_SUCCESS, payload: result.data })
  // } catch (err) {
  //   console.log("Error", err)
  // }

}