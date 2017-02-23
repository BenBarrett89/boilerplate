const domainService = domainLogic => {
  const createDomain = request => {
    return new Promise((resolve, reject) => {
      // do validation/request mapping here
      const domain = {
        count: request.body.count,
        time: new Date()
      }
      resolve(domainLogic.createDomain(domain))
    })
  }

  const getDomains = request => {
    return new Promise((resolve, reject) => {
      // do validation/request mapping here
      resolve(domainLogic.getDomains())
    })
  }

  return {
    createDomain,
    getDomains
  }
}

module.exports = {
  init: domainService
}
