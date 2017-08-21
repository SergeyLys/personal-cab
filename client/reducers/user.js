const initialState = { name: '' };

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'GET_CURRENT_USER': {
            return {
                name: action.payload
            }
        }
        break;

        case 'DROP_CURRENT_USER': {
            return {
                name: action.payload
            }
        }
            break;

        default: return state;
    }
}