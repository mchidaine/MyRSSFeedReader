import {combineReducers} from 'redux';
import CategoryReducer from './reducer-categories';
import ActiveCategoryReducer from './reducer-active-category';
import NewsReducer from './reducer-news';
import initialState from './initialState';
import PreferencesReducer from './reducer-preferences';
import FavoriteNewsReducer from './reducer-favorite-news';

const allReducers = combineReducers({
    activeCategory : ActiveCategoryReducer,
    categories : CategoryReducer,
    latestNews :  NewsReducer,
    initialState : initialState,
    preferences : PreferencesReducer,
    favoriteNews : FavoriteNewsReducer
});

export default allReducers;