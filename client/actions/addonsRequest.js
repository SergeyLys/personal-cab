import axios from 'axios';

export function addonsListRequest(token) {
    return dispatch => {
        return axios.get(`/api/addons/`, { headers: { Authorization: token }})
            .then(response => {
                dispatch({ type: 'FETCH_ADDONS_LIST', payload: response.data })
            });
    }
}