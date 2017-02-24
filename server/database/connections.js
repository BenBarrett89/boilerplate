const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const ConnectionConfig = require('../config/connection-config')

const productionURI = `mongodb://${ConnectionConfig.PRODUCTION_URI_HOST}:${ConnectionConfig.PRODUCTION_URI_PORT}/${ConnectionConfig.PRODUCTION_DB}`
const testURI = `mongodb://${ConnectionConfig.TEST_URI_HOST}:${ConnectionConfig.TEST_URI_PORT}/${ConnectionConfig.TEST_DB}`

const connections = () => {
  const productionDb = () => mongoose.createConnection(productionURI)
  const testDb = () => mongoose.createConnection(testURI)

  return {
    productionDb: productionDb,
    testDb: testDb
  }
}

module.exports = connections
