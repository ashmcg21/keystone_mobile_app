import React from 'react';
import { connect } from 'react-redux';
import DehazeIcon from '@material-ui/icons/Dehaze';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'



class ProfilePage extends React.Component {

  state = {
    edit: true,
    username: "",
    email: "",
    organization: "",
    phone_number: "",
  };

  componentDidMount() {
    // this.props.dispatch({
    //   type: "PROFILE",
    // });
  }

  clickCancel = (event) => {
    this.setState({
      edit: false
    })
  }

  clickEditMode = (event) => {

    // We need to store all of the edit info
    // if edit mode is true, go ahead and do the dispatch for PUT with the state data

    if (this.state.edit === true) {
      const userObject = {
        id: this.props.store.user.id,
        username: this.state.username,
        email: this.state.email,
        organization: this.state.organization,
        phone_number: this.state.phone_number
      }

      console.log(userObject);

      this.props.dispatch({type: "UPDATE_PROFILE", payload: userObject});
    }


    this.setState({
      edit: !this.state.edit
    })
  }

  updateUserInfo = (input) => (event) => {
    this.setState({
      [input] : event.target.value
    })
  }


  render() {
    return (
    <Container>
      {this.state.edit ? 
      (
      <div>
        <div>
          Name:
          <input onChange={this.updateUserInfo('username')} type="text" placeholder="Enter Name" />
        </div>
        <div>
          Email:
          <input onChange={this.updateUserInfo('email')} type="text" placeholder="Enter Email" />
        </div>
        <div>
          Organization:
          <input onChange={this.updateUserInfo('organization')} type="text" placeholder="Enter Organization" />
        </div>
        <div>
          Phone:
          <input onChange={this.updateUserInfo('phone_number')} type="text" placeholder="Enter Phone" />
        </div>
      </div>
      ):(
      <form >
        <div>
          <div>
            <p>
              Name: {this.props.store.user.username}
            </p>
            <p>
              Email: {this.props.store.user.email}
            </p>
            <p>
              Organization: {this.props.store.user.organization.toUpperCase()}
            </p>
            <p>
              Phone: {this.props.store.user.phone_number}
            </p>
          </div>
        </div>
      </form>
    )}

    {this.state.edit && <button onClick={this.clickCancel}>Cancel</button>}
      <button onClick={this.clickEditMode}>{this.state.edit ? 'Save' : 'Edit'}</button>
    </Container>
    )
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ProfilePage);
