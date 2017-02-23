const domainLogic = () => {
  const getDomain = (request) => {
    return new Promise((resolve, reject) => {
      // do any repository calls (once DB has been added) and business logic here
      resolve('Hello from domain logic!')
    })
  }

  return {
    getDomain
  }
}

module.exports = {
  init: domainLogic
}
