import React, {Component} from 'react';
import {connect} from 'react-redux';
import Article from './article';
import '../css/news-list.css';
import MyPreferences from './my-preferences';


class NewsList extends Component{



    createListItems(){
    if(this.props.news==="500") return (<div className="errorMessage">Erreur de connexion au serveur</div>);
    else {
        return this.props.news.map((unews, index) => { //shows list of news
            return (
               <li key={index}><Article>{unews}</Article></li>
            );
        });
      }}

      createFavoriteListItems(){
      if(this.props.news==="500") return (<div className="errorMessage">Erreur de connexion au serveur</div>);
      else {
        if(this.props.favoriteNews.length===0){
            return (<div className="no-articles">Please select your favorite categories</div>);
        } else{
            return this.props.favoriteNews.map((unews, index) => { //shows list of favorite news
                return (
                    <li key={index} > <Article>{unews}</Article></li>
                );
            });
        }
      }}



    render(){
    if(this.props.activeCategory.name==="My Feed"){ //called in tab "My Feed"
        return(
        <div className="bodyList">
            <MyPreferences/>
            <div className="newsList"> <ul>{this.createFavoriteListItems()}</ul>
            </div></div>
        );
    } else {
        return(//called in all other tabs
        <div className="bodyList">
            <div className="newsList"> <ul>{this.createListItems()}</ul>
            </div></div>
        );
       }
    }
}

function mapStateToProps(state){
    return {
        news: state.latestNews,
        activeCategory : state.activeCategory,
        favoriteNews : state.favoriteNews
    };
}



export default connect(mapStateToProps)(NewsList);