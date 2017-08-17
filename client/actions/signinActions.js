import axios from 'axios';

export function userSigninRequest(data) {
    return dispatch => {
        return axios.post('http://localhost:8000/api/signin', data);
    }
}