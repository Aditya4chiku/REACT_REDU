import axios from 'axios';

const setAuthToken = token => {
    console.log("I am token", token)
    if (token) {
        axios.defaults.headers.common['jwt'] = token;

    } else {
        delete axios.defaults.headers.common['jwt'];
        localStorage.removeItem('token');
    }
};

export default setAuthToken;
