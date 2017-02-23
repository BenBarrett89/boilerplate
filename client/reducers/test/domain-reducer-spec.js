import test from 'ava'

import { increment, decrement } from '../../actions/domain-actions'

import reducer from '../domain-reducer'

const testReduction = (assert, stateBeforeAction, action, expectedState) => {
  assert.deepEqual(reducer(stateBeforeAction, action), expectedState)
}

test(`Handles increments`, testReduction, {value: 30}, increment(), {value: 31})

test(`Handles decrements`, testReduction, {value: 30}, decrement(), {value: 29})
