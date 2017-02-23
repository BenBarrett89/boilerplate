import test from 'ava'
import { mount } from 'enzyme'
import jsdom from 'jsdom'
import sinon from 'sinon'
import React from 'react'

import Domain from '../../components/Domain'
import DomainConstants from '../../constants/domain-constants'

test.before(t => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
  global.document = doc
  global.window = doc.defaultView
})

test(`Displays the value`, assert => {
  const testValue = 5
  const domain = mount(<Domain value={testValue} />)
  const value = domain.find(`#${DomainConstants.valueSpanId}`)
  assert.is(value.text(), testValue.toString(), 'The value prop is displayed')
})

test(`Can increment the value`, assert => {
  const incrementSpy = sinon.spy()
  const domain = mount(<Domain increment={incrementSpy} />)
  const increment = domain.find(`#${DomainConstants.incrementButtonId}`)
  increment.simulate('click')
  assert.true(incrementSpy.calledOnce, 'Increment prop called when increment button clicked')
})

test(`Can decrement the value`, assert => {
  const decrementSpy = sinon.spy()
  const domain = mount(<Domain decrement={decrementSpy} />)
  const decrement = domain.find(`#${DomainConstants.decrementButtonId}`)
  decrement.simulate('click')
  assert.true(decrementSpy.calledOnce, 'Decrement prop called when decrement button clicked')
})
