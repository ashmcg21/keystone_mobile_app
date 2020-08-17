import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from "../LogOutButton/LogOutButton";
import { Container } from '@material-ui/core';

class HomePage extends Component {

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
    <Container>
      <div>
        <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>
        <LogOutButton className="log-in" />
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
