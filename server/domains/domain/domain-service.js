const domainService = domainLogic => {
  const getDomain = (request) => {
    return new Promise((resolve, reject) => {
      // do validation/request mapping here
      resolve(domainLogic.getDomain(request))
    })
  }

  return {
    getDomain
  }
}

module.exports = {
  init: domainService
}
