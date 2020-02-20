import { all } from 'redux-saga/effects'

import chatSagas from './chat';

export default function* rootSaga() {
  yield all([
    ...chatSagas,
  ])
}