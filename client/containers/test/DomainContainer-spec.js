import test from 'ava'
import { shallow } from 'enzyme'
import jsdom from 'jsdom'
import React from 'react'

import Domain from '../../components/Domain'
import { DomainPage } from '../DomainContainer'

test.before(t => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
  global.document = doc
  global.window = doc.defaultView
})

test(`Renders a Domain component`, assert => {
  const domainPage = shallow(<DomainPage />)
  const domain = domainPage.find(Domain)
  assert.is(domain.length, 1, 'Renders a Domain component')
})
