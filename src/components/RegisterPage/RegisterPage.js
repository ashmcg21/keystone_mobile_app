import React, { Component } from 'react';
import {connect} from 'react-redux';

import { TextField } from '@material-ui/core'

class RegisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    organization: '',
    phone: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          organization: this.state.organization,
          phone: this.state.phone
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <TextField
              label="Username:"
              fullWidth
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <TextField
                label="email"
                fullWidth
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <TextField
                label="password"
                fullWidth
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="organization">
              organization:
              <TextField
                label="organization"
                fullWidth
                value={this.state.organization}
                onChange={this.handleInputChangeFor('organization')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone (optional):
              <TextField
                label="phone"
                fullWidth
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

