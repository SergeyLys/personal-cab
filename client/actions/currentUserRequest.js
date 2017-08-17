import axios from 'axios';

export function currentUserRequest(token) {
    return dispatch => {
        return axios.get('/api/current-user', { headers: { Authorization: token }});
    }
}