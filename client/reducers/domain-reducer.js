import { typeDecrement, typeIncrement, typeReset, typeSetDomains } from '../constants/action-constants'

const INITIAL_VALUE = 0

const initialState = {
  value: INITIAL_VALUE
}

const decrement = state => Object.assign({}, state, {value: state.value - 1})
const increment = state => Object.assign({}, state, {value: state.value + 1})
const reset = state => Object.assign({}, state, {value: INITIAL_VALUE})
const setDomains = (state, domains) => Object.assign({}, state, {domains: domains})

export default function (state = initialState, action) {
  switch (action.type) {
    case typeDecrement:
      return decrement(state)
    case typeIncrement:
      return increment(state)
    case typeReset:
      return reset(state)
    case typeSetDomains:
      return setDomains(state, action.domains)
    default:
      return state
  }
}
