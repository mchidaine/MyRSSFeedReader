import React, {Component} from 'react';
import {connect} from 'react-redux';
import Article from './article';
import '../css/news-list.css';
import MyPreferences from './my-preferences';


class NewsList extends Component{



    createListItems(){
        return this.props.news.map((unews, index) => { //shows list of news
            return (
               <li key={index}><Article>{unews}</Article></li>
            );
        });
      }

      createFavoriteListItems(){
        return this.props.favoriteNews.map((unews, index) => { //shows list of favorite news
            return (
                <li key={index} > <Article>{unews}</Article></li>
            );
        });

      }



    render(){
    if(this.props.activeCategory.name==="My Feed"){ //called in tab "My Feed"
        return(
        <div className="bodyList">
            <MyPreferences/>
            <div className="newsList"> <ul>{this.createFavoriteListItems()}</ul>
            </div></div>
        );
    } else {
        return(
        <div className="bodyList"> //called in all other tabs
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