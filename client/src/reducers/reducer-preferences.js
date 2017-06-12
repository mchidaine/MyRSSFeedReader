import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function preferencesReducer(state = initialState.preferences, action) {
    switch (action.type) {
        case types.PREFERENCES_ADDED:
            return action.updatedPreferences
        case types.PREFERENCES_DELETED:
            return action.updatedPreferences
        default:
            return state;
    }
}