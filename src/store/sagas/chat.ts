import { select, takeLatest} from 'redux-saga/effects'

function* AddingStateToLocalStorage() {
    const state = yield select();
    yield localStorage.setItem('state', JSON.stringify(state));
}

export default [
  takeLatest('*', AddingStateToLocalStorage),
]