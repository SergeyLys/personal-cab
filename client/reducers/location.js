const initialLocation = { pathname: '/', search: '', hash: '' }

export default function locationReducer(state = initialLocation, action) {
    return action.type === 'LOCATION_CHANGE' ?
        action.location : state
}