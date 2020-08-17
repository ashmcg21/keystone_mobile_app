import React, { Component } from "react";
import { connect } from "react-redux";
import './IdeaPage.css';

import { TextField, Button, MenuItem, Modal, Container } from "@material-ui/core";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IdeaPage extends Component {
  state = {
    comment: "",
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "POST_IDEA", payload: this.state });
    this.setState({ comment: ""});
    this.handleOpen();
  };

  onFormChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  render() {
    const menuItemArray = this.props.store.questionsReducer.map(
      (item, index) => {
        return (
          <MenuItem key={index} value={item.id}>
            {item.questions}
          </MenuItem>
        );
      }
    );

    return (
      // MAP THROUGH THE REDUCER THAT HAS QUESTIONS.
<Container>
      <div>
        <h2>Ideas?</h2>

        <form onSubmit={this.onSubmit}>


          <TextField
            onChange={this.onFormChange}
            value={this.state.comments}
            label="Got any ideas?!"
            fullWidth
          />
          <Button type="submit" color="primary" variant="outlined">
            Submit
          </Button>
        </form>
        <Modal className="modal" open={this.state.open} onClose={this.handleClose}>
          <div>Thanks for the idea!</div>
        </Modal>
      </div>
      </Container>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(IdeaPage);
