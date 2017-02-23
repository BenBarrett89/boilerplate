const express = require('express')

const domainRoutes = () => {
  const domain = express()

  // add repo to logic init once it's/they've been passed in
  const domainLogic = require('../domains/domain/domain-logic').init()
  const domainService = require('../domains/domain/domain-service').init(domainLogic)

  domain.get('/', (request, response) => {
    domainService.getDomain(request)
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
