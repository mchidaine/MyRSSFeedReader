import React, { Component } from 'react';
import '../css/App.css';
import NewsList from '../containers/news-list';
import CategoryList from '../containers/category-list';



class App extends Component {

  render() {

    return (
    <div className="App">
        <div className="App-header">
            <h2>Welcome to My News Feed</h2>
        </div>
        <CategoryList/>
        <NewsList/>
    </div>

    );
  }
}



export default App;

