import * as types from './actionTypes';
import newsApi from '../api/newsApi';
import loadNewsErrorMyFeed from './newsActions';

export const addPreferences = (category, preferences) => { //preference added => reloads all categories in preferences
    return function(dispatch) {
        let updatedNews = [];
        let updatedPreferences = [];
        let tempNews = [];
        let i = 0;

        preferences.map((preference) => {
            updatedPreferences.push(preference);
        });
        updatedPreferences.push(category);
        updatedPreferences.map((preference) => {
            tempNews[i] = getApi(preference);
            i++;
        });
        Promise.all(tempNews).then((results) => {
            results.map((articles, j) => {

                articles.map((article, k) => {
                    updatedNews.push(article);

                    if (j === preferences.length && k === articles.length - 1) {

                        updatedNews.sort(compare);
                        dispatch(loadFavoriteNewsAddedSuccess(updatedNews, category, updatedPreferences));
                    }

                });

            });


        }).catch((error)=> {
               dispatch(loadNewsErrorMyFeed("500", category));
          });
    };

}

export function loadFavoriteNewsAddedSuccess(updatedNews, category, updatedPreferences) {

    return {
        type: types.PREFERENCES_ADDED,
        updatedNews,
        category,
        updatedPreferences
    };
}


export const deletePreferences = (category, preferences) => { //preference deleted => reloads all news except for the one deleted
    return function(dispatch) {

        let updatedNews = [];
        let tempNews = [];
        let i = 0;

        preferences.map((preference) => {
            if (preference.id !== category.id) {
                tempNews[i] = getApi(preference);
                i++;
            }
        });
        if (tempNews.length === 0) {
            dispatch(loadFavoriteNewsDeletedSuccess(updatedNews, category, preferences));
        } else {
            Promise.all(tempNews).then((results) => {
                results.map((articles, j) => {

                    articles.map((article, k) => {
                        updatedNews.push(article);
                        if (j === preferences.length - 2 && k === articles.length - 1) {

                            updatedNews.sort(compare);
                            dispatch(loadFavoriteNewsDeletedSuccess(updatedNews, category, preferences));
                        }
                    });
                });
            }).catch((error)=> {
                  dispatch(loadNewsErrorMyFeed("500", category));
             });
        }
    };
}


export function loadFavoriteNewsDeletedSuccess(updatedNews, category, preferences) {
    let updatedPreferences = [];
    if (preferences.length !== 0) {
        preferences.map((preference) => {
            if (preference.id !== category.id)
                updatedPreferences.push(preference);
        })
    }

    return {
        type: types.PREFERENCES_DELETED,
        updatedNews,
        category,
        updatedPreferences
    };
}


export default function getApi(category) {
    switch (category.name) {
        case "Arts":
            return newsApi.getArtsNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });
        case "Business":
            return newsApi.getBusinessNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });
        case "Company News":
            return newsApi.getCompanyNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });
        case "Entertainment":
            return newsApi.getEntertainmentNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });
        case "Environment":
            return newsApi.getEnvironmentNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });
        case "Health News":
            return newsApi.getHealthNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });
        case "Lifestyle":
            return newsApi.getLifestyleNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });
        case "Money":
            return newsApi.getWealthNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "Most Read Articles":
            return newsApi.getMostReadNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "Oddly Enough":
            return newsApi.getOddlyEnoughNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "People":
            return newsApi.getPeopleNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "Politics":
            return newsApi.getPoliticsNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "Science":
            return newsApi.getScienceNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "Sports":
            return newsApi.getSportsNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "Technology":
            return newsApi.getTechnologyNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "Top News":
            return newsApi.getTopNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "US News":
            return newsApi.getUSNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        case "World News":
            return newsApi.getWorldNews().then(news => {
                return news;
            }).catch(error => {
                //throw (error);
                return "500";
            });

        default:
            return;


    }

}


export function compare(a, b) {
    if (Date.parse(a.published) > Date.parse(b.published))
        return -1;
    if (Date.parse(a.published) < Date.parse(b.published))
        return 1;
    return 0;
}