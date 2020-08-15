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
  };

  componentDidMount() {
    this.props.dispatch({
      type: "PROFILE",
    });
  }

  onEdit = (event) => {
    event.preventDefault();
    console.log('clicked');
  }

  render() {
    return (
    <Container>
      <form onEdit={this.onEdit}>
      <div>
      <div>
        <p>
          Name:
          <button>Edit</button>
        </p>
        <p>
          Email:
        </p>
        <p>
          Organization:
        </p>
        <p>
          Phone:
        </p>
        <p>
        LinkedIn:
        </p>
      </div>
    </div>
    </form>
    </Container>
    )
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ProfilePage);
