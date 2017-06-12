import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function favoriteNewsReducer(state = initialState.favoriteNews, action) {
    switch (action.type) {
        case types.PREFERENCES_ADDED:
            return action.updatedNews
        case types.PREFERENCES_DELETED:
            console.log("reducer deleted updated news : " + action.updatedNews);
            return action.updatedNews
        case types.LOAD_RETRIEVED_NEWS_SUCCESS:
            return action.updatedNews
        default:
            return state;
    }
}