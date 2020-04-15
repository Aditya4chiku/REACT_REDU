import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['jwt'] = token;
        localStorage.setItem('token', token);
    } else {
        delete axios.defaults.headers.common['jwt'];
        localStorage.removeItem('token');
    }
};

export default setAuthToken;
