import { typeDecrement, typeGetDomains, typeIncrement,
  typePostDomain, typeRandom, typeReset, typeSetDomains } from '../constants/action-constants'

export function decrement () {
  return {
    type: typeDecrement
  }
}

export function getDomains () {
  return {
    type: typeGetDomains
  }
}

export function increment () {
  return {
    type: typeIncrement
  }
}

export function postDomain (count) {
  return {
    type: typePostDomain,
    count: count
  }
}

export function random () {
  return {
    type: typeRandom
  }
}

export function reset () {
  return {
    type: typeReset
  }
}

export function setDomains (domains) {
  return {
    type: typeSetDomains,
    domains: domains
  }
}
