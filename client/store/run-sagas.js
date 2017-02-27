import domainSagas from '../sagas/domain-sagas'

export default function (sagaMiddleware) {
  sagaMiddleware.run(domainSagas)
}
