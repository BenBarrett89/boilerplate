import test from 'ava'

import { increment, decrement } from '../actions/domain-actions'

import reducer from './domain-reducer'
const componentUnderTest = 'domain-reducer'

test(`${componentUnderTest} handles increments`, assert => {
  const stateBeforeAction = {
    value: 30
  }
  const expectedState = {
    value: 31
  }
  const reductionResult = reducer(
    stateBeforeAction,
    increment()
  )

  assert.deepEqual(reductionResult, expectedState)
})

test(`${componentUnderTest} handles decrements`, assert => {
  const stateBeforeAction = {
    value: 30
  }
  const expectedState = {
    value: 29
  }
  const reductionResult = reducer(
    stateBeforeAction,
    decrement()
  )

  assert.deepEqual(reductionResult, expectedState)
})
