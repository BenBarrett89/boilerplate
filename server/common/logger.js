const winston = require('winston')
const expressWinston = require('express-winston')

const loggerConfig = require('../config/logger-config')

const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      level: loggerConfig.LOG_LEVEL,
      handleExceptions: loggerConfig.LOGGER_HANDLE_EXCEPTIONS,
      json: loggerConfig.LOGGER_JSON,
      colorize: loggerConfig.LOGGER_COLORIZE
    })
  ]
})

const ignoreRoute = (request, response) => {
  let ignore = false
  if (loggerConfig.IGNORED_ROUTES.includes(request.url)) {
    ignore = true
  }
  return ignore
}

const expresslogger = expressWinston.logger({
  winstonInstance: logger,
  meta: loggerConfig.EXPRESS_LOGGER_META,
  msg: loggerConfig.EXPRESS_LOGGER_MESSAGE_FORMTAT,
  expressFormat: loggerConfig.EXPRESS_LOGGER_EXPRESS_FORMAT,
  colorize: loggerConfig.EXPRESS_LOGGER_COLORIZE,
  ignoreRoute: ignoreRoute,
  requestWhitelist: loggerConfig.REQUEST_WHITE_LIST,
  responseWhitelist: loggerConfig.RESPONSE_WHITE_LIST,
  bodyBlackList: loggerConfig.BODY_BLACK_LIST
})

module.exports = {
  expresslogger,
  logger
}
