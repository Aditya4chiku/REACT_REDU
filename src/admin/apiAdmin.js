import React from 'react'
import axios from 'axios'
import { setAlert } from '../redux/actions/alert';
export const createCategory = (userId, token, category) => {

    console.log("Token from ADD CATEGOR", token)
    console.log("USer", userId)
    console.log(category)

    fetch(`http://localhost:8000/api/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            setAlert('Succes', 'success')
        })
        .catch(err => {
            console.log(err);
            setAlert(`${err}`, 'danger')
        });



}
