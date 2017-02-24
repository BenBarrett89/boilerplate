const domainLogic = domainRepository => {
  const createDomain = domain => {
    return new Promise((resolve, reject) => {
      // do any repository calls and business logic here
      resolve(domainRepository.createDomain(domain))
    })
  }

  const getDomains = () => {
    return new Promise((resolve, reject) => {
      // do any repository calls and business logic here
      resolve(domainRepository.getDomains())
    })
  }

  return {
    createDomain,
    getDomains
  }
}

module.exports = {
  init: domainLogic
}
