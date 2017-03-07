import axiosInstance from '../services/axios-instance'

export default function (sagaMiddleware) {
  // domain
  const domainService = require('../services/domain-service').init(axiosInstance)
  const randomService = require('../services/random-service').init()
  const domainSagas = require('../sagas/domain-sagas').init(domainService, randomService)
  const domainWatches = require('../sagas/domain-watches').init(domainSagas)
  sagaMiddleware.run(domainWatches)
}
