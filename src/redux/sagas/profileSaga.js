import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getProfile() {
  try {
    const response = yield axios.get('/api/profile/');
    console.log(response);
    
  } catch (error) {
      console.log('Error with user:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* updateProfile(action) {
  try {
    const response = yield axios.put(`/api/profile/edit/${action.payload.id}`, action.payload);
    console.log(response);
    yield put({ type: 'FETCH_USER'});
  } catch (error) {
    console.log('Error with updating user:', error);
  }
}

function* profileSaga() {
  yield takeLatest('PROFILE', getProfile);
  yield takeLatest('UPDATE_PROFILE', updateProfile);

}

export default profileSaga;