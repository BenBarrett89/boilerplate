const loggerConstants = require('../constants/logger-constants')

const IGNORED_ROUTES = ['/favicon.ico', '/bundle.js']

const LOG_LEVEL = loggerConstants.LOG_LEVEL_DEBUG

const LOGGER_COLORIZE = true
const LOGGER_HANDLE_EXCEPTIONS = true
const LOGGER_JSON = false

const EXPRESS_LOGGER_COLORIZE = true
const EXPRESS_LOGGER_EXPRESS_FORMAT = true
const EXPRESS_LOGGER_MESSAGE_FORMTAT = 'HTTP {{req.method}} {{req.url}}'
const EXPRESS_LOGGER_META = true

const BODY_BLACK_LIST = ['password']
const REQUEST_WHITE_LIST = ['params', 'query', 'body']
const RESPONSE_WHITE_LIST = ['body']

module.exports = {
  BODY_BLACK_LIST,
  EXPRESS_LOGGER_COLORIZE,
  EXPRESS_LOGGER_EXPRESS_FORMAT,
  EXPRESS_LOGGER_MESSAGE_FORMTAT,
  EXPRESS_LOGGER_META,
  IGNORED_ROUTES,
  LOG_LEVEL,
  LOGGER_COLORIZE,
  LOGGER_HANDLE_EXCEPTIONS,
  LOGGER_JSON,
  REQUEST_WHITE_LIST,
  RESPONSE_WHITE_LIST
}
