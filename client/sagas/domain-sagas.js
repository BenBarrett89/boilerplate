import { call, put } from 'redux-saga/effects'
import { decrement, getDomains, increment, setDomains } from '../actions/domain-actions'

const domainSagas = (domainService, randomService) => {
  function* deleteDomainSaga (action) {
    try {
      yield call(domainService.deleteDomainService, action.id)
      yield put(getDomains())
    } catch (error) {
      console.log(error)
    }
  }

  function* getDomainsSaga () {
    try {
      const domains = yield call(domainService.getDomainsService)
      yield put(setDomains(domains))
    } catch (error) {
      console.log(error)
    }
  }

  function* postDomainSaga (action) {
    try {
      yield call(domainService.postDomainService, { count: action.count, time: new Date() })
      yield put(getDomains())
    } catch (error) {
      console.log(error)
    }
  }

  function* randomSaga () {
    const value = yield call(() => randomService.random() > 0.5)
    if (value) {
      yield put(increment())
    } else {
      yield put(decrement())
    }
  }

  return {
    deleteDomainSaga,
    getDomainsSaga,
    postDomainSaga,
    randomSaga
  }
}

module.exports = {
  init: domainSagas
}
