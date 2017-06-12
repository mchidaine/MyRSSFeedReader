import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function newsReducer(state = initialState.news, action) {
    switch (action.type) {
        case types.LOAD_NEWS_SUCCESS:
            return action.news

        default:
            return state;
    }
}