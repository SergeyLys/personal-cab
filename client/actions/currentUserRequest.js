import axios from 'axios';

export function currentUserRequest(token) {
    return dispatch => {
        if (token)
            return axios.get('/api/current-user', { headers: { Authorization: token }})
                .then((response) => {
                    dispatch({type: 'GET_CURRENT_USER', payload: response.data.login});
                });
    }
}