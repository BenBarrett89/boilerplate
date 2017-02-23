const { json, urlencoded } = require('body-parser')

const APIPaths = require('../config/api-paths')

const API = (app) => {
  app.use(json())
  app.use(urlencoded({ extended: true }))

  // register models against DB connection (pass into model files?)
  // create repositories to wrap model methods and pass into route inits for logics to use

  const domainRoutes = require('./domain-routes').init()
  app.use(APIPaths.DOMAIN_PATH, domainRoutes)
}

module.exports = {
  init: API
}
