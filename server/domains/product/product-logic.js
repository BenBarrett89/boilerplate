const productLogic = productRepository => {
  const createProduct = product => {
    return new Promise((resolve, reject) => {
      // do any repository calls and business logic here
      console.log('logic', product)
      resolve(productRepository.createProduct(product))
    })
  }

  const deleteProduct = id => {
    return new Promise((resolve, reject) => {
      // do any repository calls and business logic here
      resolve(productRepository.deleteProduct(id))
    })
  }

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      // do any repository calls and business logic here
      resolve(productRepository.getProducts())
    })
  }

  return {
    createProduct,
    deleteProduct,
    getProducts
  }
}

module.exports = {
  init: productLogic
}
