import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNews() {
  try {
    const response = yield axios.get('/api/news/');
    console.log(response);
    put({
      type: 'SET_NEWS',
      payload: response.data
    });
  } catch (error) {
      console.log('Error with user:', error);
  }
}

// function* updateLikes(action) {
//   try {
//     const response = yield axios.put(`/api/profile/likes/${action.payload.id}`, action.payload);
//     console.log(response);
//     yield put({ type: 'FETCH_USER'});
//   } catch (error) {
//     console.log('Error with updating user:', error);
//   }
// }

function* newsSaga() {
  yield takeLatest('GET_NEWS', getNews);
//   yield takeLatest('UPDATE_PROFILE', updateProfile);

}

export default newsSaga;