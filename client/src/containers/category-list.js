import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCategory} from '../actions/newsActions';
import '../css/category-list.css';

class CategoryList extends Component {

    createListItems() { //creates menu with all categories (class Active for the active link)
        return this.props.categories.map((category) => {
            if (category.id === this.props.activeCategory.id) {
                return (
                    <li key = {category.id}
                    className = "active"
                    onClick = {() => this.props.selectCategory(category, this.props.preferences)} >

                    <a href = "#" > {category.name}
                    </a>
                    </li >
                    );
            } else {
                return (
                    <li key = {category.id}
                    onClick = {() => this.props.selectCategory(category, this.props.preferences)} >

                    <a href = "#" > {category.name}
                    </a>
                    </li >
                    );
            }


        });
    }

    render() {
        return (
            <nav className = "categoryList" > <ul> {
                this.createListItems()
            } < /ul></nav >
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        activeCategory: state.activeCategory,
        preferences: state.preferences
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCategory: selectCategory
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CategoryList);