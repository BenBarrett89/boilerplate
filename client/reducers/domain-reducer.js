import { typeDecrement, typeIncrement, typeReset, typeSetDomains } from '../constants/action-constants'

const initialState = {
  value: 0
}

const decrement = state => Object.assign({}, state, {value: state.value - 1})
const increment = state => Object.assign({}, state, {value: state.value + 1})
const setDomains = (state, domains) => Object.assign({}, state, {domains: domains})

export default function (state = initialState, action) {
  switch (action.type) {
    case typeDecrement:
      return decrement(state)
    case typeIncrement:
      return increment(state)
    case typeReset:
      return initialState
    case typeSetDomains:
      return setDomains(state, action.domains)
    default:
      return state
  }
}
