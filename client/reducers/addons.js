const initialState = {
    addons: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ADDONS_LIST': {
            return {
                ...state,
                addons: action.payload
            }
        }
            break;
        case 'FETCH_ADDONS_ITEM': {
            return [
                action.payload
            ]
        }
            break;
        default: return {...state};
    }
}