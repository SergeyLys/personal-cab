import axios from 'axios';

export function newsListRequest(token) {
    return dispatch => {
        return axios.get('/api/news', { headers: { Authorization: token }})
            .then(response => {
                dispatch({ type: 'FETCH_NEWS_LIST', payload: response.data });
            });
    }
}

export function newsItemRequest(token, url) {
    return dispatch => {
        return axios.get(`/api/news/${url}`, { headers: { Authorization: token }})
            .then(response => {

                let newsItemArray = Array.prototype.map.call(response.data, (value, index)=> {
                    return [value];
                });
                dispatch({ type: 'FETCH_NEWS_ITEM', payload: response.data })
            });
    }
}