import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* idea(action) {
  try {
    const response = yield axios.post('/api/idea', action.payload);
    console.log(response);
    
  } catch (error) {
      console.log('Error with user:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* ideaSaga() {
  yield takeLatest('POST_IDEA', idea);
}

export default ideaSaga;