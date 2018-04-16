import { takeLatest , put , call } from 'redux-saga/effects';
import { TEST_ACTION , testActionOk , testActionError } from '../actions/phones';
import axios from 'axios';

const getTestMsg = () => axios.get('http://localhost:3000/');

function* test() {
   try {
      let msg = yield call(getTestMsg);
      yield put(testActionOk(msg.data));
   } catch (e) {
      yield put(testActionError('Error'));
   }
}

function* phones() {
  yield takeLatest(TEST_ACTION, test);
}

export default phones;