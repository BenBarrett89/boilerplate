const randomService = () => {
  const random = () => {
    return Math.random()
  }

  return {
    random
  }
}

module.exports = {
  init: randomService
}
