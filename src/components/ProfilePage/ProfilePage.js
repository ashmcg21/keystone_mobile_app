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
    user: '',
    email: '',
    organization: '',
    number: '',

  }

  componentDidMount() {
    this.props.dispatch({
      type: "PROFILE",
    });
  }

  onEdit = (event) => {
    event.preventDefault();
    console.log('clicked');
  };

  render() {
    return (
    <Container>
      <div>
      <div>
        <p>
          Name:
          <EditIcon>edit</EditIcon>
        </p>
        <p>
          Email:
          <EditIcon>edit</EditIcon>
        </p>
        <p>
          Organization:
          <EditIcon>edit</EditIcon>
          </p>
        <p>
          Phone:
          <EditIcon>edit</EditIcon>
        </p>
        {/* <p>
        LinkedIn:
        <EditIcon>edit</EditIcon>   //A STRETCH GOAL
        </p> */}
      </div>
    </div>
    </Container>
    )
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ProfilePage);
