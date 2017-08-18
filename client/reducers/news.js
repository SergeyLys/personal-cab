
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_NEWS_LIST': {
            console.log('FETCH_NEWS_LIST');
            return [
                action.payload
            ]

        }
        break;
        case 'FETCH_NEWS_ITEM': {
            console.log('FETCH_NEWS_ITEM');
            return [
                action.payload
            ]
        }
        default: return [...state];
    }
}