import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getProfile(action) {
  try {
    const response = yield axios.post('/api/profile', action.payload);
    console.log(response);
    
  } catch (error) {
      console.log('Error with user:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* profileSaga() {
  yield takeLatest('PROFILE', getProfile);
}

export default profileSaga;