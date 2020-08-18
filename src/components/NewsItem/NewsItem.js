import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TextField, IconButton, Button, } from '@material-ui/core';




class NewsItem extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_NEWS'
    })
  }

  render() {
    return (
    <Container>
      <div>
          {/* map through server results */}
          {/* {this.props.store.newsReducer} */}
      </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  store: {
    newsReducer: state.newsReducer
  }
});


export default connect(mapStateToProps)(NewsItem);



/*
You will probably need a TABLE for 'news',
Which means you will need a SAGA and a REDUCER too!
Each item in the news table would probably have:
- news_text
- num_of_likes


You would have one of these for each news item that is going on,
which means that the parent would probs do a .map and return on of these

Each of these news items should show:
- The news (the text for whats up)
- Like button
- Save button
- Share
- Comments (Stretch)
*/