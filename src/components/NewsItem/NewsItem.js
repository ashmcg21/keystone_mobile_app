import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Container,
  IconButton,
  Checkbox
} from '@material-ui/core';

import {
  FavoriteBorder,
  Favorite,
 } from '@material-ui/icons';
import Axios from 'axios';




//  updateLike () {
//    axios({
//      method: 'PUT',
//      url: 'news/likes' + this.props.item.id,
//      data: req.body
//    })
//    .then((response) => {
//       this.props.
//    })
//    .catch((err) => {})
//  }




class NewsItem extends Component {

  state = {
    news: "",
    likes: "",
  };

  
  onSubmit = (event) => {
    event.preventDefault();
    
  };

  onHeartClick = (event) => {
    this.props.dispatch({ type: "LIKE_NEWSITEM", payload: this.props.item.id });
  }


  render() {
    return (
    <Container>
      <div>

         {/* Make a 'p' tag that uses this.props.item.news_input */}
         <p>{this.props.item.news_input}</p>
        <IconButton onClick={this.onHeartClick}>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        {/*  MAKE A p TAG that shows 'Likes: {this.props.item.num_of_likes} */}
        <p>
          Likes: {this.props.item.num_of_likes}
        </p>
          
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