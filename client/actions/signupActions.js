import axios from 'axios';

export function userSignupRequest(data) {
    return dispatch => {
        return axios.post('http://localhost:8000/api/signup', data);
    }
}