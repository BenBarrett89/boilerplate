import {
  typeSetProducts,
  typeGetProducts
} from '../constants/action-constants'

export function getProducts () {
  console.log('getProducts action')
  return {
    type: typeGetProducts
  }
}

export function setProducts (products) {
  return {
    type: typeSetProducts,
    data: products
  }
}
