import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class FeedbackPage extends Component {

  onSubmit = (event) => {
    event.preventDefault();
  };


  render() {
    return(
  <div>
    <h2>Feedback</h2>


    <form onSubmit={this.onSubmit}>
      <input type="text" placeholder="please give us your feedback!" />
      <button>Submit</button>
    </form>

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
export default connect()(FeedbackPage);
