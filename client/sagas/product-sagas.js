import { call, put } from 'redux-saga/effects'
import {
  getProducts,
  setProducts
} from '../actions/product-actions'

const productSagas = productService => {
  function* deleteProductSaga (action) {
    try {
      yield call(productService.deleteProductService, action.id)
      yield put(getProducts())
    } catch (error) {
      console.log(error)
    }
  }

  function* getProductsSaga () {
    console.log('getProductsSaga')
    try {
      const products = yield call(productService.getProductsService)
      console.log('yo', products)
      yield put(setProducts(products))
    } catch (error) {
      console.log(error)
    }
  }

  function* postProductSaga (action) {
    try {
      yield call(productService.postProductService, { count: action.count, time: new Date() })
      yield put(getProducts())
    } catch (error) {
      console.log(error)
    }
  }

  return {
    deleteProductSaga,
    getProductsSaga,
    postProductSaga
  }
}

module.exports = {
  init: productSagas
}
