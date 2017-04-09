import { PRODUCT_PATH } from '../config/api-config'

const ProductService = axiosInstance => {
  const deleteProductService = id => {
    return new Promise((resolve, reject) => {
      axiosInstance.delete(`${PRODUCT_PATH}/${id}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.error(error)
          reject(error)
        })
    })
  }

  const getProductsService = () => {
    return new Promise((resolve, reject) => {
      axiosInstance.get(PRODUCT_PATH)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.error(error)
          reject(error)
        })
    })
  }

  const postProductService = Product => {
    return new Promise((resolve, reject) => {
      axiosInstance.post(PRODUCT_PATH, Product)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.error(error)
          reject(error)
        })
    })
  }

  return {
    deleteProductService,
    getProductsService,
    postProductService
  }
}

module.exports = {
  init: ProductService
}
