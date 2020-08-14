import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextField, Button, MenuItem, Modal, Paper, Box, Container } from "@material-ui/core";

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Container>
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <h1>Login</h1>
        <Paper>
          <Box p={2} mb={4}>
        <form onSubmit={this.login}>
          <div>
            <label htmlFor="username">
              <TextField
                label="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                fullWidth
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">

              <TextField
                label="password"
                type = "password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
                fullWidth
              />
            </label>
          </div>
          <div>
            <Button className="log-in" type="submit" color="primary" variant="outlined">
              Log In
              </Button>
          </div>
        </form>
        </Box>
        </Paper>

        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button>
        </center>
      </div>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
