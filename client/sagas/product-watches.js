import { takeEvery } from 'redux-saga/effects'
import {
  typeDeleteProduct,
  typeGetProducts,
  typePostProduct
} from '../constants/action-constants'

const productWatches = productSagas => {
  function* watchDeleteProduct () {
    yield takeEvery(typeDeleteProduct, productSagas.deleteProductSaga)
  }

  function* watchGetProducts () {
    // listens to action broadcasts and calls relevant saga
    console.log('watchGetProducts')
    yield takeEvery(typeGetProducts, productSagas.getProductsSaga)
  }

  function* watchPostProduct () {
    yield takeEvery(typePostProduct, productSagas.postProductSaga)
  }

  function* root () {
    yield [
      // watchDeleteProduct(),
      watchGetProducts()
      // watchPostProduct()
    ]
  }

  return root
}

module.exports = {
  init: productWatches
}
