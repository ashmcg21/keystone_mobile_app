import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profile(action) {
  try {
    const response = yield axios.post('/api/profile', action.payload);
    console.log(response);
    
  } catch (error) {
      console.log('Error with user:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* feedbackSaga() {
  yield takeLatest('PROFILE', profile);
}

export default profileSaga;