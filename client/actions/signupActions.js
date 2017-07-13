import axios from 'axios';

export function userSignupRequest(data) {
    return dispatch => {
        return axios.post('https://vtbins.preview.amediko.ru/auth/registration', data);
    }
}