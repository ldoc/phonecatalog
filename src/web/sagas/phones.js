import { takeLatest , put , call } from 'redux-saga/effects';
import { GET_PHONES , getPhonesOk , getPhonesError } from '../actions/phones';
import axios from 'axios';

const getApiPhones = () => axios.get('http://localhost:3000/phones');

function* getPhones() {
   try {
      let phonesRes = yield call(getApiPhones);
      yield put(getPhonesOk(phonesRes.data));
   } catch (e) {
      yield put(getPhonesError('Server failed trying to access to phone list'));
   }
}

function* phones() {
  yield takeLatest(GET_PHONES, getPhones);
}

export default phones;