const { json, urlencoded } = require('body-parser')

const APIPaths = require('../config/api-paths')
const DomainSchema = require('../schemas/DomainSchema')
const ProductSchema = require('../schemas/ProductSchema')

const API = (app, db) => {
  app.use(json())
  app.use(urlencoded({ extended: true }))

  // models
  const Domain = db.model('Domain', DomainSchema)
  const Product = db.model('Product', ProductSchema)

  // repositories
  const domainRepository = require('../domains/domain/domain-repository').init(Domain)
  const productRepository = require('../domains/product/product-repository').init(Product)

  // routes
  const domainRoutes = require('./domain-routes').init(domainRepository)
  app.use(APIPaths.DOMAIN_PATH, domainRoutes)

  const productRoutes = require('./product-routes').init(productRepository)
  app.use(APIPaths.PRODUCT_PATH, productRoutes)
}

module.exports = {
  init: API
}
