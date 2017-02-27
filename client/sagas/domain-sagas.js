import { call, put, takeEvery } from 'redux-saga/effects'
import { decrement, increment, setDomains } from '../actions/domain-actions'
import { getDomains } from '../services/domain-service'
import { typeGetDomains, typeRandom } from '../constants/action-constants'

function* getDomainsSaga () {
  try {
    const domains = yield call(getDomains)
    yield put(setDomains(domains))
  } catch (error) {
    console.log(error)
  }
}

function* randomSaga () {
  const value = yield call(() => Math.random() > 0.5)
  if (value) {
    yield put(increment())
  } else {
    yield put(decrement())
  }
}

function* watchGetDomains () {
  yield takeEvery(typeGetDomains, getDomainsSaga)
}

function* watchRandom () {
  yield takeEvery(typeRandom, randomSaga)
}

export default function* root () {
  yield [
    watchGetDomains(),
    watchRandom()
  ]
}
