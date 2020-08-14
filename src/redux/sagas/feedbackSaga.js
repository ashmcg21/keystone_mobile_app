import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* feedbackAnswer(action) {
  try {
    const response = yield axios.post('/api/feedback', action.payload);
    console.log(response);
    
  } catch (error) {
      console.log('Error with user:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* feedbackSaga() {
  yield takeLatest('QUESTION_ANSWER', feedbackAnswer);
}

export default feedbackSaga;
