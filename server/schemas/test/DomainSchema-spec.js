import test from 'ava'
const Mongoose = require('mongoose').Mongoose
const mongoose = new Mongoose()
mongoose.Promise = require('bluebird')
const mockgoose = require('mockgoose')

const DomainSchema = require('../DomainSchema')

test.before(assert => {
  mockgoose(mongoose).then(() => {
    mongoose.connect('mongodb://localhost:27017/boilerplate-test', (error) => {
      if (error) assert.fail(`Mongoose connection failed with error: ${error}`)
    })
  })
})

test.afterEach(assert => {
  mongoose.connection.models = {}
})

test(`Can create valid Domain objects`, async assert => {
  const Domain = mongoose.model('Domain', DomainSchema)
  const testDomainObject = {
    count: 5,
    time: new Date(2017, 2, 23, 9)
  }
  const domain = new Domain(testDomainObject)
  const result = await domain.save()
  assert.falsy(result.errors, `There is not an error creating a valid object`)
})

test(`Will not create invalid Domain objects (missing time)`, async assert => {
  const Domain = mongoose.model('Domain', DomainSchema)
  const testDomainObject = {
    count: 5
  }
  const domain = new Domain(testDomainObject)
  assert.throws(domain.save(), 'Domain validation failed', `Throws a validation error`)
})

test(`Will not create invalid Domain objects (missing count)`, async assert => {
  const Domain = mongoose.model('Domain', DomainSchema)
  const testDomainObject = {
    time: new Date(2017, 2, 23, 9)
  }
  const domain = new Domain(testDomainObject)
  assert.throws(domain.save(), 'Domain validation failed', `Throws a validation error`)
})
