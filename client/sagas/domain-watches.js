import { takeEvery } from 'redux-saga/effects'
import { typeDeleteDomain, typeGetDomains, typePostDomain, typeRandom } from '../constants/action-constants'

const domainWatches = (domainSagas) => {
  function* watchDeleteDomain () {
    yield takeEvery(typeDeleteDomain, domainSagas.deleteDomainSaga)
  }

  function* watchGetDomains () {
    yield takeEvery(typeGetDomains, domainSagas.getDomainsSaga)
  }

  function* watchPostDomain () {
    yield takeEvery(typePostDomain, domainSagas.postDomainSaga)
  }

  function* watchRandom () {
    yield takeEvery(typeRandom, domainSagas.randomSaga)
  }

  function* root () {
    yield [
      watchDeleteDomain(),
      watchGetDomains(),
      watchPostDomain(),
      watchRandom()
    ]
  }

  return root
}

module.exports = {
  init: domainWatches
}
