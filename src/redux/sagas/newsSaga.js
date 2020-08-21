import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNews() {
  try {
    const response = yield axios.get('/api/news/');
    console.log(response);
    yield put({
      type: 'SET_NEWS',
      payload: response.data
    });
  } catch (error) {
      console.log('Error with user:', error);
  }
}

function* updateLikes(action) {
  try {
    const response = yield axios.put(`/api/news/likes/${action.payload}`, action.payload);
    console.log(response);
    yield put({ type: 'GET_NEWS'});
  } catch (error) {
    console.log('Error with updating user:', error);
  }
}

function* newsSaga() {
  yield takeLatest('GET_NEWS', getNews);
  yield takeLatest('LIKE_NEWSITEM', updateLikes);
//   yield takeLatest('UPDATE_PROFILE', updateProfile);

}

export default newsSaga;