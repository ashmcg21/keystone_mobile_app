import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNews() {
  try {
    const response = yield axios.get('/api/news/');
    console.log(response);
    
  } catch (error) {
      console.log('Error with user:', error);
  }
}

// function* updateProfile(action) {
//   try {
//     const response = yield axios.put(`/api/profile/edit/${action.payload.id}`, action.payload);
//     console.log(response);
//     yield put({ type: 'FETCH_USER'});
//   } catch (error) {
//     console.log('Error with updating user:', error);
//   }
// }

function* newsSaga() {
  yield takeLatest('SET_NEWS', getNews);
//   yield takeLatest('UPDATE_PROFILE', updateProfile);

}

export default newsSaga;