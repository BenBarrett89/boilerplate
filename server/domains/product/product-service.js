const productService = productLogic => {
  const createProduct = request => {
    return new Promise((resolve, reject) => {
      // do validation/request mapping here
      console.log(request)
      const product = {
        name: request.body.name,
        brewery: request.body.brewery,
        abv: request.body.abv,
        price: request.body.price,
        bbe: request.body.bbe,
        stock: request.body.stock
      }
      console.log('service', product)
      resolve(productLogic.createProduct(product))
    })
  }

  const deleteProduct = request => {
    return new Promise((resolve, reject) => {
      // do validation/request mapping here
      const id = request.params.id
      resolve(productLogic.deleteProduct(id))
    })
  }

  const getProducts = request => {
    return new Promise((resolve, reject) => {
      // do validation/request mapping here
      resolve(productLogic.getProducts())
    })
  }

  return {
    createProduct,
    deleteProduct,
    getProducts
  }
}

module.exports = {
  init: productService
}
