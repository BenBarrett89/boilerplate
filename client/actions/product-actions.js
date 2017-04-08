import {
  typeSetProducts,
  typeGetProducts
} from '../constants/action-constants'

export function getProducts () {
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
