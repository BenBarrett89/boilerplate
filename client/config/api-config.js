const PROTOCOL = 'http://'
const HOST = 'localhost'
const PORT = 8080

const BASE_URL = `${PROTOCOL}${HOST}:${PORT}`

const API = 'api'
const API_PATH = `/${API}`

const DOMAIN = 'domain'
const DOMAIN_PATH = `${API_PATH}/${DOMAIN}`

const PRODUCT = 'product'
const PRODUCT_PATH = `${API_PATH}/${PRODUCT}`

module.exports = {
  BASE_URL,
  DOMAIN,
  DOMAIN_PATH,
  PRODUCT,
  PRODUCT_PATH
}
