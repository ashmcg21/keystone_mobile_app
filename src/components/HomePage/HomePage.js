import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TextField, IconButton, Button, } from '@material-ui/core';

import NewsItem from '../NewsItem/NewsItem';
import NewsFeed from '../NewsItem/NewsFeed';


class HomePage extends Component {
  render() {
    return (
    <Container>
      <div>
      <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>
        <NewsFeed />
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
