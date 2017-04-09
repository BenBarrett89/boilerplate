const express = require('express')

const productRoutes = productRepository => {
  const product = express()

  const productLogic = require('../domains/product/product-logic').init(productRepository)
  const productService = require('../domains/product/product-service').init(productLogic)

  product.delete('/:id', (request, response) => {
    productService.deleteProduct(request)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send(error)
    })
  })

  product.get('/', (request, response) => {
    productService.getProducts(request)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send(error)
    })
  })

  product.post('/', (request, response) => {
    productService.createProduct(request)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send(error)
    })
  })

  return product
}

module.exports = {
  init: productRoutes
}
