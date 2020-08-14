// PUT THOSE QUESTIONS INTO A REDUCER!QUESTIONS! - GETQUESTIONS! - GET

// PUT THOSE QUESTIONS INTO A REDUCER!QUESTIONS! - GETQUESTIONS! - GETQUESTIONS!

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getQuestions() {
  try {
    const response = yield axios.get("/api/feedback/questions");
    console.log(response.data);

    // We need to do a yield put to broadcast to the reducer
    // Data is sitting in Saga, we need to send it to a reducer
    yield put({ type: "SET_QUESTIONS", payload: response.data });
  } catch (error) {
    console.log("Error with user:", error);
  }
}

function* questionSaga() {
  yield takeLatest("GET_QUESTIONS", getQuestions);
}

export default questionSaga;
