import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TextField, IconButton, Button, } from '@material-ui/core';

import NewsItem from '../NewsItem/NewsItem';


class HomePage extends Component {
  render() {
    return (
    <Container>
      <div>
        
        <NewsItem />
      </div>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);
