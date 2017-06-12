import React, {Component} from 'react';
import '../css/article.css';
import timeLogo from '../Simple_icon_time.svg';


class Article extends Component {


    timeToNow(date) { //function used to calculate how long ago an article was posted
        var timestamp = Date.parse(date);
        var now = Date.now();
        var timeSpent = now - timestamp;

        var minutes = timeSpent / 60000;
        var hours = minutes / 60;
        var days = hours / 24;

        var exactDate = new Date(timestamp);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var dateDay = exactDate.getDate();
        var dateMonth = months[exactDate.getMonth()];
        if (Math.round(days) === 0) {
            if (Math.round(hours) === 0) {
                if (Math.round(minutes) === 0) {
                    return "just now";
                } else if (Math.round(minutes) === 1) {
                    return Math.round(minutes) + " minute ago";
                } else {
                    return Math.round(minutes) + " minutes ago";
                }
            } else if (Math.round(hours) === 1) {
                return Math.round(hours) + " hour ago";
            } else {
                return Math.round(hours) + " hours ago";
            }
        } else if (Math.round(days) === 1) {
            return "yesterday";
        } else if (Math.round(days) > 31) {
            return dateMonth + " " + dateDay;
        } else {
            return Math.round(days) + " days ago";
        }
    }


    render(){
        return ( //render each article with its attributes as an external link
            <div className="article">
                <a href={this.props.children.link} target="_blank" rel="noopener noreferrer">
                <div className="articleOverview">
                    <h3> {this.props.children.title}</h3>
                    <p className="time"> <img src={timeLogo} alt="time"/> {this.timeToNow(this.props.children.published)} </p>
                    <p className="articleContent" dangerouslySetInnerHTML={{__html: this.props.children.content}} />
                    <p className="articleOrigin"> From {this.props.children.feed.name} </p>
                </div>
                </a>
            </div>
        );
    }
}




export default Article;

