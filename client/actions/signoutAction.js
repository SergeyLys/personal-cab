export function signOut() {
    return dispatch => { return dispatch({type: 'DROP_CURRENT_USER', payload: ''}) };
}