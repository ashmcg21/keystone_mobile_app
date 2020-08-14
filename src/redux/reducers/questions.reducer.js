// This will store the questions for the feedbackpage to load.

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default questionsReducer;
