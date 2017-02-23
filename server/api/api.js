const { json, urlencoded } = require('body-parser')

const APIPaths = require('../config/api-paths')
const DomainSchema = require('../schemas/DomainSchema')

const API = (app, db) => {
  app.use(json())
  app.use(urlencoded({ extended: true }))

  // models
  const Domain = db.model('Domain', DomainSchema)

  // repositories
  const domainRepository = require('../domains/domain/domain-repository').init(Domain)

  // routes
  const domainRoutes = require('./domain-routes').init(domainRepository)
  app.use(APIPaths.DOMAIN_PATH, domainRoutes)
}

module.exports = {
  init: API
}
