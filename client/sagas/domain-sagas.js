import { call, put, takeEvery } from 'redux-saga/effects'
import { increment, decrement } from '../actions/domain-actions'
import { typeRandom } from '../constants/action-constants'

function* random (action) {
  const value = yield call(() => Math.random() > 0.5)
  if (value) {
    yield put(increment())
  } else {
    yield put(decrement())
  }
}

function* randomSaga () {
  yield takeEvery(typeRandom, random)
}

export default randomSaga
