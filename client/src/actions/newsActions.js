import newsApi from '../api/newsApi';
import * as types from './actionTypes';
import getApi from './preferencesActions';
import compare from './preferencesActions';

// called on initialization with all news in category "Latest News"
export default function loadNews() {
    return function(dispatch) {
        return newsApi.getAllNews().then(news => {
            dispatch(loadNewsSuccess(news, {
                id: 1,
                name: "Latest News"
            }));
        }).catch(error => {
            dispatch(loadNewsError("500"));
            //throw (error);
        });
    };
}


//when a category is clicked from the menu : calls actions from 'api' folder
export const selectCategory = (category, preferences) => {
    switch (category.name) {
        case "Latest News":
            return function(dispatch) {
                return newsApi.getAllNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "Arts":
            return function(dispatch) {
                return newsApi.getArtsNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "Business":
            return function(dispatch) {
                return newsApi.getBusinessNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "Company News":
            return function(dispatch) {
                return newsApi.getCompanyNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                   // throw (error);
                });
            };
        case "Entertainment":
            return function(dispatch) {
                return newsApi.getEntertainmentNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                   // throw (error);
                });
            };
        case "Environment":
            return function(dispatch) {
                return newsApi.getEnvironmentNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                 //   throw (error);
                });
            };
        case "Health News":
            return function(dispatch) {
                return newsApi.getHealthNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                 //   throw (error);
                });
            };
        case "Lifestyle":
            return function(dispatch) {
                return newsApi.getLifestyleNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "Money":
            return function(dispatch) {
                return newsApi.getWealthNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "Most Read Articles":
            return function(dispatch) {
                return newsApi.getMostReadNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                   // throw (error);
                });
            };
        case "Oddly Enough":
            return function(dispatch) {
                return newsApi.getOddlyEnoughNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                   // throw (error);
                });
            };
        case "People":
            return function(dispatch) {
                return newsApi.getPeopleNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "Politics":
            return function(dispatch) {
                return newsApi.getPoliticsNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                 //   throw (error);
                });
            };
        case "Science":
            return function(dispatch) {
                return newsApi.getScienceNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                 //   throw (error);
                });
            };
        case "Sports":
            return function(dispatch) {
                return newsApi.getSportsNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "Technology":
            return function(dispatch) {
                return newsApi.getTechnologyNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                 //   throw (error);
                });
            };
        case "Top News":
            return function(dispatch) {
                return newsApi.getTopNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "US News":
            return function(dispatch) {
                return newsApi.getUSNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError("500"));
                  //  throw (error);
                });
            };
        case "World News":
            return function(dispatch) {
                return newsApi.getWorldNews().then(news => {
                    dispatch(loadNewsSuccess(news, category));
                }).catch(error => {
                dispatch(loadNewsError(error, "500"));
                 //   throw (error);
                });
            };
        case "My Feed": //when category My Feed is clicked => calls all news checked in preferences
            return function(dispatch) {
                let updatedNews = [];
                let tempNews = [];
                let i = 0;

                preferences.map((preference) => {

                    tempNews[i] = getApi(preference);
                    i++;

                });
                if (tempNews.length === 0) {
                    dispatch(loadFavoriteNewsRetrievedSuccess(updatedNews, category));
                } else {
                    Promise.all(tempNews).then((results) => {
                        results.map((articles, j) => {
                            articles.map((article, k) => {
                                updatedNews.push(article);
                                if (j === preferences.length - 1 && k === articles.length - 1) {
                                    updatedNews.sort(compare);
                                    dispatch(loadFavoriteNewsRetrievedSuccess(updatedNews, category));
                                }

                            });
                        });
                    }).catch((error)=> {
                        dispatch(loadNewsErrorMyFeed("500", category));
                    });
                }
            };


        default:
            return;
    }

}


export function loadNewsError(errorCode){
    return {
        type: types.LOAD_NEWS_ERROR,
        errorCode
    };
}

export function loadNewsErrorMyFeed(errorCode, category){
    return {
        type: types.LOAD_NEWS_ERROR_MYFEED,
        errorCode,
        category
    };
}


export function loadNewsSuccess(news, category) {
    return {
        type: types.LOAD_NEWS_SUCCESS,
        news,
        category
    };
}

export function loadFavoriteNewsRetrievedSuccess(updatedNews, category) {
    return {
        type: types.LOAD_RETRIEVED_NEWS_SUCCESS,
        updatedNews,
        category
    };
}