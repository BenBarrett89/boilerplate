const express = require('express')

const domainRoutes = domainRepository => {
  const domain = express()

  const domainLogic = require('../domains/domain/domain-logic').init(domainRepository)
  const domainService = require('../domains/domain/domain-service').init(domainLogic)

  domain.delete('/:id', (request, response) => {
    domainService.deleteDomain(request)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send(error)
    })
  })

  domain.get('/', (request, response) => {
    domainService.getDomains(request)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send(error)
    })
  })

  domain.post('/', (request, response) => {
    domainService.createDomain(request)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send(error)
    })
  })

  return domain
}

module.exports = {
  init: domainRoutes
}
