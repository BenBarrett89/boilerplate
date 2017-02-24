const domainRepository = Domain => {
  const createDomain = domainObject => {
    return new Promise((resolve, reject) => {
      const domain = new Domain(domainObject)
      domain.save(error => {
        if (error) {
          return reject(error)
        }
        resolve('Domain created')
      })
    })
  }

  const getDomains = () => {
    return new Promise((resolve, reject) => {
      Domain.find({}, (error, domains) => {
        if (error) {
          return reject(error)
        }
        resolve(domains)
      })
    })
  }

  return {
    createDomain,
    getDomains
  }
}

module.exports = {
  init: domainRepository
}
