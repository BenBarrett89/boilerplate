import axiosInstance from '../services/axios-instance'

export default function (sagaMiddleware) {
  // domain
  const domainService = require('../services/domain-service').init(axiosInstance)
  const randomService = require('../services/random-service').init()
  const domainSagas = require('../sagas/domain-sagas').init(domainService, randomService)
  const domainWatches = require('../sagas/domain-watches').init(domainSagas)

  const productService = require('../services/product-service').init(axiosInstance)
  const productSagas = require('../sagas/product-sagas').init(productService)
  const productWatches = require('../sagas/product-watches').init(productSagas)
  sagaMiddleware.run(domainWatches, productWatches)
}
