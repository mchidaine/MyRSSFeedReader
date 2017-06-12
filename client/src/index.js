import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import App from './containers/App';
import loadNews from './actions/newsActions';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';


const persistedState = loadState(); // Loads previous preferences from saved state
const store = createStore(allReducers, persistedState, applyMiddleware(thunk)); //creates store


store.subscribe(throttle(() => {//listens to state changes for preferences
    saveState({

    preferences : store.getState().preferences
    });
}, 1000));


store.dispatch(loadNews()); //calls loadNews() for initialization



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
