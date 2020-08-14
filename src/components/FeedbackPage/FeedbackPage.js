import React, { Component } from "react";
import { connect } from "react-redux";

import { TextField, Button, MenuItem, Modal } from "@material-ui/core";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class FeedbackPage extends Component {
  state = {
    comments: "",
    question: "",
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    // WE WILL GO GET THE QUESTIONS
    // LETS DO A DISPATCH TO THE QUESTION SAGA
    this.props.dispatch({
      type: "GET_QUESTIONS",
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "QUESTION_ANSWER", payload: this.state });
    this.setState({ comments: "", question: "" });
    this.handleOpen();
  };

  onFormChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  onQuestionsChange = (event) => {
    this.setState({
      question: event.target.value,
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

      <div>
        <h2>Feedback</h2>

        <form onSubmit={this.onSubmit}>
          {/* TODO - create Reducer and Saga to get Feedback Questions from Server Route */}
          <TextField
            onChange={this.onQuestionsChange}
            value={this.state.question}
            label="Select"
            select
            fullWidth
          >
            {menuItemArray}
          </TextField>

          <TextField
            onChange={this.onFormChange}
            value={this.state.comments}
            label="please give us your feedback!"
            fullWidth
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div>Thank you for yoour feedback!</div>
        </Modal>
      </div>
    );
  }
}

// If you needed to add local state or other things,
// you can make it a class component like:

/*
class InfoPage extends React.Component {

  render() {
    return (
      <div>
        <p>Info Page</p>
      </div>
    )
  }
}
*/

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeedbackPage);
