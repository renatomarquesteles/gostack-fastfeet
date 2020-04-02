import { all, call, takeLatest, put } from 'redux-saga/effects';

import { signInSuccess, signInFailure } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/deliveries');
  } catch (err) {
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
