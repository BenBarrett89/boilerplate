import { typeIncrement, typeDecrement, typeReset } from '../constants/action-constants'

const initialState = {
  value: 0
}

const increment = state => Object.assign({}, state, {value: state.value + 1})
const decrement = state => Object.assign({}, state, {value: state.value - 1})

export default function (state = initialState, action) {
  switch (action.type) {
    case typeIncrement:
      return increment(state)
    case typeDecrement:
      return decrement(state)
    case typeReset:
      return initialState
    default:
      return state
  }
}
