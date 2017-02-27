import { call, put, takeEvery } from 'redux-saga/effects'
import { decrement, getDomains, increment, setDomains } from '../actions/domain-actions'
import { getDomainsService, postDomainService } from '../services/domain-service'
import { typeGetDomains, typePostDomain, typeRandom } from '../constants/action-constants'

function* getDomainsSaga () {
  try {
    const domains = yield call(getDomainsService)
    yield put(setDomains(domains))
  } catch (error) {
    console.log(error)
  }
}

function* postDomainSaga (action) {
  try {
    yield call(postDomainService, { count: action.count, time: new Date() })
    yield put(getDomains())
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

function* watchPostDomain () {
  yield takeEvery(typePostDomain, postDomainSaga)
}

function* watchRandom () {
  yield takeEvery(typeRandom, randomSaga)
}

export default function* root () {
  yield [
    watchGetDomains(),
    watchPostDomain(),
    watchRandom()
  ]
}
