const loggerConstants = require('../../constants/logger-constants')
const { logger } = require('../../common/logger')

const productRepository = Product => {
  const createProduct = productObject => {
    return new Promise((resolve, reject) => {
      const product = new Product(productObject)
      console.log('repo', product)
      product.save(error => {
        if (error) {
          logger.log(loggerConstants.LOG_LEVEL_ERROR, `productRepository.createProduct error: \n\t${error}`)
          return reject(error)
        }
        resolve('Product created')
      })
    })
  }

  const deleteProduct = id => {
    return new Promise((resolve, reject) => {
      Product.remove({_id: id}, error => {
        if (error) {
          logger.log(loggerConstants.LOG_LEVEL_ERROR, `productRepository.deleteProduct error: \n\t${error}`)
          return reject(error)
        }
        resolve('Product deleted')
      })
    })
  }

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      Product.find({}, (error, products) => {
        if (error) {
          logger.log(loggerConstants.LOG_LEVEL_ERROR, `productRepository.getProducts error: \n\t${error}`)
          return reject(error)
        }
        resolve(products)
      })
    })
  }

  return {
    createProduct,
    deleteProduct,
    getProducts
  }
}

module.exports = {
  init: productRepository
}
