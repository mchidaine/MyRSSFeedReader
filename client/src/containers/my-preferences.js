import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/my-preferences.css';
import {addPreferences} from '../actions/preferencesActions';
import {deletePreferences} from '../actions/preferencesActions';
import 'babel-polyfill';
import {bindActionCreators} from 'redux';

class MyPreferences extends Component{

    createListItems(){ //creates list of categories that can be checked to filter the news (only in My Feed)
        return this.props.categories.map((category) => {
            if(category.name!=="My Feed" && category.name!=="Latest News"){ //we don't want to show "My Feed" and "Latest News" categories
                let pos = this.props.preferences.map(function(e){ return e.id;}).indexOf(category.id);
                if (pos > -1){ // if the category clicked on is already checked
                    return (
                    <li key={category.id}>
                    <label for={category.id}>
                        <input id={category.id} type="checkbox"
                        onChange={() => this.props.action.deletePreferences(category, this.props.preferences)} checked //calls for delete from preferences
                        />
                    {category.name}
                    </label></li>
                    );

                } else { //if the category clicked on isn't checked
                    return (
                    <li key={category.id}>
                    <label for={category.id}>
                    <input id={category.id} type="checkbox"
                    onChange={() => this.props.action.addPreferences(category, this.props.preferences)} //calls to add to preferences
                    />

                             {category.name}
                     </label></li>
                     );
                }
            }
       });
    }

    render(){
        return(
            <div className="myPreferences"><ul>{this.createListItems()} </ul></div>
        );
    }
}

function mapStateToProps(state){
    return {
        categories: state.categories,
        preferences : state.preferences,
        favoriteNews : state.favoriteNews
    };
}

function matchDispatchToProps(dispatch){
    return {
        action: {
            addPreferences: bindActionCreators(addPreferences, dispatch),
            deletePreferences: bindActionCreators(deletePreferences,dispatch)
        }
    };
}


export default connect(mapStateToProps, matchDispatchToProps)(MyPreferences);