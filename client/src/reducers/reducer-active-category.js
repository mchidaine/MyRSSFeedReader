import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.category, action) {
    switch (action.type) {
        case types.LOAD_NEWS_SUCCESS:
            return action.category;
        case types.LOAD_RETRIEVED_NEWS_SUCCESS:
            return action.category;
        case types.LOAD_NEWS_ERROR_MYFEED:
            return action.category;
        default:
            return state;
    }
}