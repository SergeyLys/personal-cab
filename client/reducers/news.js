const initialState = {
    news: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_NEWS_LIST': {
            return {
                ...state,
                news: action.payload
            }
        }
        break;
        case 'FETCH_NEWS_ITEM': {
            return [
                action.payload
            ]
        }
        break;
        default: return {...state};
    }
}