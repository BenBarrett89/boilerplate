import test from 'ava'
const Mongoose = require('mongoose').Mongoose
const mongoose = new Mongoose()
mongoose.Promise = require('bluebird')
const mockgoose = require('mockgoose')
const sinon = require('sinon')

const DomainSchema = require('../../../schemas/DomainSchema')
let DomainMock
let domainRepository

test.before(async assert => {
  await mockgoose(mongoose)
  await mongoose.connect('mongodb://localhost:27017/boilerplate-test')
  const Domain = mongoose.model('Domain', DomainSchema)
  DomainMock = sinon.mock(Domain)
  domainRepository = require('../domain-repository').init(Domain)
})

test(`Can create a domain object with a valid domain object`, async assert => {
  const testDomainObject = {
    count: 5,
    time: new Date(2017, 2, 23, 9)
  }
  const result = await domainRepository.createDomain(testDomainObject)
  assert.is(result, 'Domain created', `Creates a domain object successfully`)
})

test(`Will not create a domain object with an invalid domain object (missing time)`, async assert => {
  const testDomainObject = {
    count: 5
  }
  assert.throws(domainRepository.createDomain(testDomainObject), 'Domain validation failed', `Throws the validation error up from the model`)
})

test(`Will not create a domain object with an invalid domain object (missing count)`, async assert => {
  const testDomainObject = {
    time: new Date(2017, 2, 23, 9)
  }
  assert.throws(domainRepository.createDomain(testDomainObject), 'Domain validation failed', `Throws the validation error up from the model`)
})

test.serial(`Can get domain objects`, async assert => {
  const stubbedDomains = [
    {count: 10, date: new Date(2017, 2, 23, 9)}
  ]
  DomainMock.expects('find').yields(null, stubbedDomains)
  const result = await domainRepository.getDomains()
  assert.is(result, stubbedDomains, `Creates a domain object successfully`)
})

test.serial.failing(`Returns the error if there is an error getting domain objects`, async assert => {
  const expectedError = new Error()
  DomainMock.expects('find').yields(expectedError)
  assert.throws(domainRepository.getDomains(), expectedError, `Throws the error up from the model`)
})
