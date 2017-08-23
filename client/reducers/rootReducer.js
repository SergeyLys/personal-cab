import { combineReducers } from 'redux';
import user from './user'
import news from './news';
import addons from './addons';

export default combineReducers({
    user,
    news,
    addons
});