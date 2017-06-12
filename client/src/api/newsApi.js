class NewsApi { //API CALLS
    static getAllNews() {
        return fetch('/api/news').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getArtsNews() {
        return fetch('/api/artsculture').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getBusinessNews() {
        return fetch('/api/businessNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getCompanyNews() {
        return fetch('/api/companyNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getEntertainmentNews() {
        return fetch('/api/entertainment').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getEnvironmentNews() {
        return fetch('/api/environment').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getHealthNews() {
        return fetch('/api/healthNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getLifestyleNews() {
        return fetch('/api/lifestyle').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getWealthNews() {
        return fetch('/api/wealth').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getMostReadNews() {
        return fetch('/api/MostRead').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getOddlyEnoughNews() {
        return fetch('/api/oddlyEnoughNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getPeopleNews() {
        return fetch('/api/peopleNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getPoliticsNews() {
        return fetch('/api/PoliticsNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getScienceNews() {
        return fetch('/api/scienceNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getSportsNews() {
        return fetch('/api/sportsNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getTechnologyNews() {
        return fetch('/api/technologyNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getTopNews() {
        return fetch('/api/topNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getUSNews() {
        return fetch('/api/domesticNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static getWorldNews() {
        return fetch('/api/worldNews').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}

export default NewsApi;