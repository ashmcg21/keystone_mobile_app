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


// heartClick = (event) => {
//   event.preventDefault();
// console.log('clicked');
// }

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

  

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_NEWS'
    })
  }

  render() {
    return (
    <Container>
      <div>
      <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>
        
         <ul>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>
        <IconButton >
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        {/* <button onClick={heartClick}>button</button> */}
          {/* map through server results */}
          <div>
          {/* {this.props.store.newsReducer} */}
          </div>
          
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