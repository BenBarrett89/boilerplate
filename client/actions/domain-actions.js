import { typeIncrement, typeDecrement } from '../constants/action-constants'

export function increment () {
  return {
    type: typeIncrement
  }
}

export function decrement () {
  return {
    type: typeDecrement
  }
}
