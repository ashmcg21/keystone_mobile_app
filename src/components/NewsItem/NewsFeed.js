import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';
/*
HomePage
 NewsFeed <- Component Did Mount to go get the list!
   NewsItem
   NewsItem
   NewsItem
   NewsItem
*/

class NewsFeed extends Component {

    componentDidMount() {
        this.props.dispatch({
          type: 'GET_NEWS'
        })
      }


    render() {
        const newsArray = this.props.store.newsReducer.map((item, index) => {
            return <NewsItem key={index} item={item}/>;
        })

        return(
        <div>
            <h2>News Feed</h2>
            <div>
                {newsArray}
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    store: {
      newsReducer: state.newsReducer
    }
  });

export default connect(mapStateToProps)(NewsFeed);