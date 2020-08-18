import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TextField, IconButton, Button, } from '@material-ui/core';




class NewsItem extends Component {
  render() {
    return (
    <Container>
      <div>
          
      </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
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