const PRODUCTION_URI_HOST = 'localhost'
const PRODUCTION_URI_PORT = '27017'
const PRODUCTION_DB = 'caskit'

const TEST_URI_HOST = 'localhost'
const TEST_URI_PORT = '27017'
const TEST_DB = `${PRODUCTION_DB}-test`

module.exports = {
  PRODUCTION_DB,
  PRODUCTION_URI_HOST,
  PRODUCTION_URI_PORT,
  TEST_DB,
  TEST_URI_HOST,
  TEST_URI_PORT
}
